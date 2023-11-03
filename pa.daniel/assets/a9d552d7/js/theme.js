$(document).ready(function () {

	let tabsNavigatorMainMenu = new TabsNavigator({
		buttons: '.type-account__btn',
		itemsBlock: '.type-account_body_form',
		activeButton: 'type-account__btn__active',
		displayBlockItemActive: 'type-account_body_form__active',
		classDisplayNone: 'd-none',
	});

	new hasArrowToggle({
		class: 'has-arrow_toggle',
		addClass: 'has-arrow_toggle__active',
		hiddenBlock: 'has-arrow_toggle__block'
	})

	new toggleMainMenu({
		btnClass: 'navbar-arr',
		blockMenuClass: 'left-sidebar',
		addOpenClass: 'left-sidebar__open'
	})

	new modalPopap({
		btnClose: 'btn-close',
		modalBlock: 'modal',
		openModalBlockClass: 'modal__open'
	})

	$('.main-menu').metisMenu();


	$('.dropdown-toggle__btn_language').click(function () {
		setTimeout(function () {
			$('.dropdown_language .dropdown-toggle').click();
		}, 100)
	})

})


function TabsNavigator(element) {
	if (!document.querySelector(element.buttons)) return;
	let buttons = document.querySelectorAll(element.buttons);
	let itemsBlock = document.querySelectorAll(element.itemsBlock);
	let activeButton = element.activeButton;
	let displayBlockItemActive = element.displayBlockItemActive;
	let classDisplayNone = element.classDisplayNone;
	let visualFirstElements = (element.visualFirstElements !== undefined) ? element.visualFirstElements : true ;

	let colBackClickBtn = element.colBackClickBtn;

	let liner = function (argument) {
		argument.classList.add(classDisplayNone)
	}

	for (let y = 0; itemsBlock.length > y; y++) {
		itemsBlock[y].classList.add(classDisplayNone)
	}

	if(visualFirstElements){
		itemsBlock[0].classList.remove(classDisplayNone)
		itemsBlock[0].classList.add(displayBlockItemActive);
		buttons[0].classList.add(activeButton);
	}


	for (let i = 0; i < buttons.length; i++) {
		triggerBtnClick(i);
	}

	function remuveClass(el, className, listEvent = null) {
		for (let x = 0; x < el.length; x++) {
			el[x].classList.remove(className);

			if (listEvent) {
				el[x].addEventListener("transitionend", liner(el[x]))
			}
		}
	}
	function triggerBtnClick(i){
		buttons[i].onclick = function (e) {
			e.preventDefault();
			remuveClass(buttons, activeButton);
			remuveClass(itemsBlock, displayBlockItemActive, true);
			this.classList.add(activeButton);
			itemsBlock[i].classList.add(displayBlockItemActive);
			itemsBlock[i].classList.remove(classDisplayNone);

			if(colBackClickBtn){
				colBackClickBtn(this) ;
			}
		}
	}
}

function hasArrowToggle(element) {
	let elementClass = '.' + element.class;
	let addClass = element.addClass;
	let hiddenBlock = ' .' + element.hiddenBlock;

	$(elementClass).click(function (e) {
		//hasArrowToggleClose();

		$(this).toggleClass(addClass);
		if (hiddenBlock) {
			$(this).find(hiddenBlock).slideToggle();
		}
	})

	function hasArrowToggleClose() {
		$(elementClass).removeClass(addClass);
		if (hiddenBlock) {
			$(elementClass).find(hiddenBlock).slideUp();
		}
	}
}

function toggleMainMenu(element) {
	let btnClass = '.' + element.btnClass;
	let blockMenuClass = '.' + element.blockMenuClass;
	let addOpenClass = element.addOpenClass;

	$(btnClass).click(function () {
		$(blockMenuClass).toggleClass(addOpenClass)
		$(".burger_nav_span").toggleClass(addOpenClass)
	})
}

function modalPopap(element) {
	let btnClose = document.querySelector('.' + element.btnClose);
	let modalBlock = document.querySelector('.' + element.modalBlock);
	let openModalBlockClass = element.openModalBlockClass;

	if (!modalBlock || !btnClose) return;

	btnClose.onclick = function () {
		modalBlock.classList.toggle(openModalBlockClass)
	}
}

/**
 * 
 * @param checkBoxControl
 * @param windowBlock
 * @param btnControl
 * @constructor
 */
function CreateAccount(checkBoxControl, windowBlock, btnControl) {
	 let  checkBoxItemClass = '.'+checkBoxControl.checkBoxItemClass;
	 let  checkBoxItemCheckedClass = checkBoxControl.checkBoxItemCheckedClass;
	 let  checkBoxItemAttrName = checkBoxControl.checkBoxItemAttrName;
	 let  inputForCheckBoxItemAttrId = '#'+checkBoxControl.inputForCheckBoxItemAttrId;
	 let  classFinisBlock = '.'+checkBoxControl.classFinisBlock;

	 let  windowBlocksClass = '.'+windowBlock.windowBlocksClass;
	 let  windowBlocksActiveClass = windowBlock.windowBlocksActiveClass;

	 let  btnControlBackClass = '.'+btnControl.btnControlBackClass;

	 let effectTime = 200;


	$(checkBoxItemClass).click(function () {
		let atr = $(this).attr(checkBoxItemAttrName);
		$(checkBoxItemClass).removeClass(checkBoxItemCheckedClass);
		$(this).addClass(checkBoxItemCheckedClass);
		$(inputForCheckBoxItemAttrId).val(atr);

		 $(this).parents(windowBlocksClass).slideUp(effectTime);
		 if(classFinisBlock){
			 $(classFinisBlock).slideDown(effectTime);
		 }else{
			 $(this).parents(windowBlocksClass).next().slideDown(effectTime);
		 }

	})

	$(windowBlocksClass).slideUp(effectTime);
	$(windowBlocksClass+':first').slideDown(effectTime);

	$(btnControlBackClass).click(function () {
		$(this).parents(windowBlocksClass).slideUp(effectTime);
		if(classFinisBlock){
			$($(windowBlocksClass)[0]).slideDown(effectTime);
		}else{
			$(this).parents(windowBlocksClass).prev().slideDown(effectTime);
		}
	})
}

document.addEventListener('DOMContentLoaded', () => {
    const signupIndividualPhoneNumberInputElem = document.querySelector('#signup-phone-number');
    const signupCorporatePhoneNumberInputElem = document.querySelector('#signupcompanyform-phone1');
    const depositMttransactionsPlusPhoneInputElem = document.querySelector('#mttransactions-plus_phone');
	const backHistoryElem = document.querySelector('.auth-page .back-history');
    const btnShowStepsElem = document.querySelector('.auth-page .btn-handler');
	const sidebarNavMenuLink = document.querySelectorAll('.sidebar-nav .main-menu a');
	
    const ÑyrillicInputBan = (input) => {
        if (input) {
            input.addEventListener('input', () => {
				input.value = input.value.replace(/\D/g, '');
			});
        };
    };

    if (backHistoryElem) {
        backHistoryElem.addEventListener('click', () => history.back());
    }

    if (btnShowStepsElem) {
        btnShowStepsElem.addEventListener('click', () => {
            btnShowStepsElem.classList.toggle('active');
            btnShowStepsElem.nextElementSibling.classList.toggle('show');
        });
    }

    ÑyrillicInputBan(signupIndividualPhoneNumberInputElem);
    ÑyrillicInputBan(signupCorporatePhoneNumberInputElem);
    ÑyrillicInputBan(depositMttransactionsPlusPhoneInputElem);

	if (sidebarNavMenuLink) {
		sidebarNavMenuLink.forEach((link, i) => {
			let linkIndex = localStorage.getItem('childLink');

			link.addEventListener('click', () => {
				localStorage.setItem('childLink', i);
			});
			if (linkIndex) {
				sidebarNavMenuLink[linkIndex].classList.add('active');
				sidebarNavMenuLink[linkIndex].parentElement.parentElement.parentElement.classList.add('active');
				try {
					if (sidebarNavMenuLink[linkIndex].nextElementSibling.classList.contains('collapse')) {
						sidebarNavMenuLink[linkIndex].nextElementSibling.classList.add('in');
					}
				} catch (error) {}
			}
		});
	}

	// const signupFormGroupLicense = document.querySelector('#signupform-group');
	const signuoDocsLinks = document.querySelectorAll('.privacy-docs a');

	$('#signupform-group').on('select2:select', function (e) {
		let data = e.params.data;
		signuoDocsLinks.forEach(link => {
			switch (data.id) {
				case '2':
					link.href = link.href.replace('svg', 'mu');
					break;
				case '3':
					link.href = link.href.replace('mu', 'svg');
					break;
			}
		});
	});

});
