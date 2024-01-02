
jQuery( document ).ready(function() {
    if (/*@cc_on!@*/true) { 						
        var ieclass = 'ie' + document.documentMode; 
        jQuery( ".enquiry-wrap" ).addClass(ieclass);
    } 
    jQuery( ".sliding-enquiry" ).addClass('sliding-enquiry-right');
    var contwidth = jQuery( ".enquiry-content" ).outerWidth()+2;      	
    jQuery( ".sliding-enquiry" ).css( "right", "-"+contwidth+"px" );
    jQuery( ".sliding-enquiry" ).css( "visibility", "visible" );
    jQuery('.sliding-enquiry').addClass("open_sliding_enquiry_right");
    jQuery('.sliding-enquiry').addClass("enquiry-content-bounce-in-right");
    jQuery( ".btn-fixed" ).click(function() {
        if(jQuery('.sliding-enquiry').hasClass("open")) {
            jQuery('.sliding-enquiry').removeClass("open");
            jQuery( ".sliding-enquiry" ).css( "right", "-"+contwidth+"px" );
            jQuery('.btn-fixed').removeClass('btn-fixed--active');
        } else {
            jQuery('.sliding-enquiry').addClass("open");
            jQuery( ".sliding-enquiry" ).css( "right", 0 );		
            jQuery('.btn-fixed').addClass('btn-fixed--active');
        }
    });	
    jQuery('#enquiryform').after("<div style='font-size:12px;'>Powered by <a href='https://www.tradewithzerah.com/' style='color:#2c5a85' target='_blank'>ZerahFX</a></div>");  
    
    try {
        jQuery(function($){
            jQuery("#uForm__tel_1").mask("+99 999-999-9999");
         });
    } catch (error) {}
    jQuery( ".above-footer .menu > .parent > a").click(function(e) {
        e.preventDefault()
        jQuery(this).toggleClass('open')
        jQuery(this).next('.nav-child').slideToggle()
    });
    jQuery( ".mobile-menu .menu > .parent > a").click(function(e) {
        e.preventDefault()
        jQuery(this).toggleClass('open');
        jQuery(this).next('.nav-child').slideToggle();
    });
    jQuery('.page-commodities .advan-list li:first-child').addClass('hover');
    jQuery('.page-commodities .advan-list li').mouseenter( function(){
      jQuery('.page-commodities .advan-list li').removeClass('hover');
      jQuery(this).addClass('hover');
    });
    jQuery('.page-label .benefits .item').mouseenter( function(){
      jQuery('.page-label .benefits .item').removeClass('hover');
      jQuery(this).addClass('hover');
    });

    var stocksSlider = new Swiper(".stocks-slider .swiper-container", {
        autoplay: {
          delay: 0,
          reverseDirection: true,
        },
        speed: 2000,
        loop: true,

        breakpoints: {
          300: {
            slidesPerView: 4,
            spaceBetween: 11,
          },
          576: {
            slidesPerView: 5,
            spaceBetween: 11,
          },
          740: {
            slidesPerView: 8,
            spaceBetween: 11,
          },
          1200: {
            slidesPerView: 10,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 12,
            spaceBetween: 15,
          },
          1900: {
            slidesPerView: 12,
            spaceBetween: 20,
          },
          1921: {
            slidesPerView: 12,
            spaceBetween: 25,
          },
        },

      });

    let disclaimerPopup = function (){
        let results = document.cookie.match(/disclaimerPopup=(.+?)(;|$)/);
        if(!results){
            jQuery('.disclaimer-popup').show(400);
        }

        jQuery('.disclaimer-popup').on('click',()=>{
            document.cookie = "disclaimerPopup=true;path=/";
            jQuery('.disclaimer-popup').hide(400);
        })
    };
    disclaimerPopup();



});

document.addEventListener('DOMContentLoaded', () => {
    const backHistoryElem = document.querySelector('.registr-page .back-history');
    const btnShowStepsElem = document.querySelector('.registr-page .btn-handler');
    const openFileCvBtnElem = document.querySelector('.cv .open-file__btn');
    const openFileCvInputElem = document.querySelector('.cv .cv__input-file');
    const paymentsTabBtns = document.querySelectorAll('.payments .payments__btn');
    const paymentsContainerBlocks = document.querySelectorAll('.payments .payments__block');
    // const menuFundingLinks = document.querySelectorAll('.menu li a');
    const cvFormBtnElem = document.querySelector('.cv-block .cv__form .cv__btn');

    if (backHistoryElem) {
        backHistoryElem.addEventListener('click', () => history.back());
    }

    if (btnShowStepsElem) {
        btnShowStepsElem.addEventListener('click', () => {
            btnShowStepsElem.classList.toggle('active');
            btnShowStepsElem.nextElementSibling.classList.toggle('show');
        });
    }

    if (openFileCvBtnElem) {
        openFileCvBtnElem.addEventListener('click', () => {
            openFileCvInputElem.click();
        });
    }

    if (cvFormBtnElem) {
        cvFormBtnElem.addEventListener('click', () => {
            if (openFileCvInputElem.files.length === 0) {
                openFileCvInputElem.nextElementSibling.classList.add('open-file--empty');

                setTimeout(() => {
                    openFileCvInputElem.nextElementSibling.classList.remove('open-file--empty')
                }, 1500);
            }
        });

        openFileCvInputElem.addEventListener('input', () => {
            openFileCvInputElem.files.length === 1 ? openFileCvInputElem.nextElementSibling.classList.add('open-file--success') : openFileCvInputElem.nextElementSibling.classList.add('open-file--empty');
        });
    }

    if (paymentsTabBtns) {
        const removePaymentsElementsClass = (elements) => elements.forEach(elem => elem.classList.remove(`${elem.classList[0]}--active`));

        paymentsTabBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                removePaymentsElementsClass(paymentsTabBtns);
                removePaymentsElementsClass(paymentsContainerBlocks);
                btn.classList.add('payments__btn--active');
                paymentsContainerBlocks[i].classList.add('payments__block--active');
            });
        });
    }

    // if (menuFundingLinks) {
    //     menuFundingLinks.forEach(link => {
    //         link.addEventListener('click', () => {
    //             if (link.classList.contains('tab-withdrawals')) {
    //                 localStorage.setItem('tab', 'withdrawals');
    //             }
    //             if (link.classList.contains('tab-deposits')) {
    //                 localStorage.setItem('tab', 'deposits');
    //             }
    //         });
    //     });

    //     if (localStorage.getItem('tab')) {
    //         removePaymentsElementsClass(paymentsTabBtns);
    //         removePaymentsElementsClass(paymentsContainerBlocks);

    //         if (localStorage.getItem('tab')  === 'withdrawals') {
    //             paymentsTabBtns[1].classList.add('payments__btn--active');
    //             paymentsContainerBlocks[1].classList.add('payments__block--active');
    //         } else {
    //             paymentsTabBtns[0].classList.add('payments__btn--active');
    //             paymentsContainerBlocks[0].classList.add('payments__block--active');
    //         }

    //         setTimeout(() => {
    //             localStorage.removeItem('tab');
    //         }, 2500);
    //     }
    // }

    function smoothScrollToElem(links) {
        const anchorsLink = document.querySelectorAll(links);
        
        if (anchorsLink) {
            const smoothScroll = (anchors) => {
                for (let anchor of anchors) {
                    const blockID = anchor.getAttribute('href');
                        anchor.addEventListener('click', (e) => {
                            e.preventDefault();
                
                            document.querySelector(blockID).scrollIntoView({
                            behavior: 'smooth',
                            block: 'end'
                        });
                    });
                };
            };
            smoothScroll(anchorsLink);
        }
    };
    smoothScrollToElem('a.scroll-to');

    const table = document.querySelector('.acc-types .table-wrap');
    const tableBtnControlLeft = document.querySelector('.acc-types .table-btns-control .btn-left');
    const tableBtnControlRight = document.querySelector('.acc-types .table-btns-control .btn-right');
    const direction = window.getComputedStyle(document.querySelector('body'), null).getPropertyValue("direction");

    if (table) {
        let clientWidth = table.clientWidth;
        let scrollWidth = table.scrollWidth;
        let scroll = scrollWidth - clientWidth;

        const disabledBtnControlls = (sign) => {
            if (table.scrollLeft === 0) {
                tableBtnControlLeft.setAttribute('disabled', '');
            } else if (scroll === Math.round(table.scrollLeft)) {
                tableBtnControlRight.setAttribute('disabled', '');
            } else {
                tableBtnControlLeft.removeAttribute('disabled', '');
                tableBtnControlRight.removeAttribute('disabled', '');
            }
        };

        tableBtnControlRight.addEventListener('click', () => {
            disabledBtnControlls();
            if (direction !== 'rtl' ) {
                table.scrollLeft += 150;
            } else {
                table.scrollLeft -= 150;
            }
        });
    
        tableBtnControlLeft.addEventListener('click', () => {
            disabledBtnControlls();
            if (direction !== 'rtl' ) {
                table.scrollLeft -= 150;
            } else {
                table.scrollLeft += 150;
            }
        });
    }

    const accountsSlider = new Swiper('.accounts-slider.swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 2000,
        loop: true,

        pagination: {
            el: '.accounts-slider__pagin.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.accounts-btn.swiper-button-next',
            prevEl: '.accounts-btn.swiper-button-prev',
        },

        breakpoints: {
          300: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          576: {
            slidesPerView: 2.1,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 12,
          },
          992: {
            slidesPerView: 3.3,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
        },
    });

    const accountTypesElems = document.querySelectorAll('.accounts .accounts__container--slider .account');
    const awardsSliderContainer = document.querySelector('.awards .awards-slider.swiper');

    accountTypesElems.forEach(item => {
        item.addEventListener('click', () => {
            accountsSlider.autoplay.stop();
        });

        item.addEventListener('mouseleave', () => {
            accountsSlider.autoplay.start();
        });
    });

    const initAwardsSlider = () => {
        if (awardsSliderContainer) {
            const awardsSlider = new Swiper('.awards-slider.swiper', {
                slidesPerView: 5,
                speed: 5000,
                loop: true,
                autoplay: {
                    delay: 0,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                    slidesPerView: 4,
                    },
                    1440: {
                    slidesPerView: 5,
                    },
                    1920: {
                    slidesPerView: 6,
                    }
                },
            });

            awardsSliderContainer.addEventListener('mouseleave', () => {
                awardsSlider.autoplay.start();
            });
        
        }        
    };

    window.addEventListener('load', () => {
        if (accountsSlider && window.matchMedia('(max-width: 575px)').matches) {
            try {
                return accountsSlider.destroy();
            } catch (error) {}
        }
        if (window.matchMedia('(max-width: 1920px)').matches && !window.matchMedia('(max-width: 1024px)').matches) {
            initAwardsSlider();
        } 
    })
    
    window.addEventListener('resize', () => {
        if (accountsSlider && window.matchMedia('(max-width: 575px)').matches) {
            try {
                return accountsSlider.destroy();
            } catch (error) {}
        }
        if (window.matchMedia('(max-width: 1920px)').matches && !window.matchMedia('(max-width: 1024px)').matches) {
            initAwardsSlider();
        } 
    })
    if (window.matchMedia('(max-width: 575px)').matches) {
        initAwardsSlider();
    } 
    const widgetsParentContainer = document.querySelector('#economicCalendarWidget');
    const darkModeSwitcher = document.querySelector('.economic-calendar .dark-mode input');

    if (widgetsParentContainer) {
        let widget = new economicCalendar({width: "100%", height: "600px", mode: 2, "theme":0});

        setTimeout(() => {
            darkModeSwitcher.addEventListener('change', () => {
                if (darkModeSwitcher.checked) {
                    economicCalendarWidget.children[0].src = economicCalendarWidget.children[0].src.replace('&theme=0', '&theme=1')
                } else {
                    economicCalendarWidget.children[0].src = economicCalendarWidget.children[0].src.replace('&theme=1', '&theme=0')
                }
            });
        }, 100);
    }
});







// phone cods
var countryCode = [
    {
        "name": "Afghanistan",
        "dial_code": "+93",
        "code": "AF"
    },
    {
        "name": "Aland Islands",
        "dial_code": "+358",
        "code": "AX"
    },
    {
        "name": "Albania",
        "dial_code": "+355",
        "code": "AL"
    },
    {
        "name": "Algeria",
        "dial_code": "+213",
        "code": "DZ"
    },
    {
        "name": "AmericanSamoa",
        "dial_code": "+1684",
        "code": "AS"
    },
    {
        "name": "Andorra",
        "dial_code": "+376",
        "code": "AD"
    },
    {
        "name": "Angola",
        "dial_code": "+244",
        "code": "AO"
    },
    {
        "name": "Anguilla",
        "dial_code": "+1264",
        "code": "AI"
    },
    {
        "name": "Antarctica",
        "dial_code": "+672",
        "code": "AQ"
    },
    {
        "name": "Antigua and Barbuda",
        "dial_code": "+1268",
        "code": "AG"
    },
    {
        "name": "Argentina",
        "dial_code": "+54",
        "code": "AR"
    },
    {
        "name": "Armenia",
        "dial_code": "+374",
        "code": "AM"
    },
    {
        "name": "Aruba",
        "dial_code": "+297",
        "code": "AW"
    },
    {
        "name": "Australia",
        "dial_code": "+61",
        "code": "AU"
    },
    {
        "name": "Austria",
        "dial_code": "+43",
        "code": "AT"
    },
    {
        "name": "Azerbaijan",
        "dial_code": "+994",
        "code": "AZ"
    },
    {
        "name": "Bahamas",
        "dial_code": "+1242",
        "code": "BS"
    },
    {
        "name": "Bahrain",
        "dial_code": "+973",
        "code": "BH"
    },
    {
        "name": "Bangladesh",
        "dial_code": "+880",
        "code": "BD"
    },
    {
        "name": "Barbados",
        "dial_code": "+1246",
        "code": "BB"
    },
    {
        "name": "Belarus",
        "dial_code": "+375",
        "code": "BY"
    },
    {
        "name": "Belgium",
        "dial_code": "+32",
        "code": "BE"
    },
    {
        "name": "Belize",
        "dial_code": "+501",
        "code": "BZ"
    },
    {
        "name": "Benin",
        "dial_code": "+229",
        "code": "BJ"
    },
    {
        "name": "Bermuda",
        "dial_code": "+1441",
        "code": "BM"
    },
    {
        "name": "Bhutan",
        "dial_code": "+975",
        "code": "BT"
    },
    {
        "name": "Bolivia, Plurinational State of",
        "dial_code": "+591",
        "code": "BO"
    },
    {
        "name": "Bosnia and Herzegovina",
        "dial_code": "+387",
        "code": "BA"
    },
    {
        "name": "Botswana",
        "dial_code": "+267",
        "code": "BW"
    },
    {
        "name": "Brazil",
        "dial_code": "+55",
        "code": "BR"
    },
    {
        "name": "British Indian Ocean Territory",
        "dial_code": "+246",
        "code": "IO"
    },
    {
        "name": "Brunei Darussalam",
        "dial_code": "+673",
        "code": "BN"
    },
    {
        "name": "Bulgaria",
        "dial_code": "+359",
        "code": "BG"
    },
    {
        "name": "Burkina Faso",
        "dial_code": "+226",
        "code": "BF"
    },
    {
        "name": "Burundi",
        "dial_code": "+257",
        "code": "BI"
    },
    {
        "name": "Cambodia",
        "dial_code": "+855",
        "code": "KH"
    },
    {
        "name": "Cameroon",
        "dial_code": "+237",
        "code": "CM"
    },
    {
        "name": "Canada",
        "dial_code": "+1",
        "code": "CA"
    },
    {
        "name": "Cape Verde",
        "dial_code": "+238",
        "code": "CV"
    },
    {
        "name": "Cayman Islands",
        "dial_code": "+ 345",
        "code": "KY"
    },
    {
        "name": "Central African Republic",
        "dial_code": "+236",
        "code": "CF"
    },
    {
        "name": "Chad",
        "dial_code": "+235",
        "code": "TD"
    },
    {
        "name": "Chile",
        "dial_code": "+56",
        "code": "CL"
    },
    {
        "name": "China",
        "dial_code": "+86",
        "code": "CN"
    },
    {
        "name": "Christmas Island",
        "dial_code": "+61",
        "code": "CX"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "dial_code": "+61",
        "code": "CC"
    },
    {
        "name": "Colombia",
        "dial_code": "+57",
        "code": "CO"
    },
    {
        "name": "Comoros",
        "dial_code": "+269",
        "code": "KM"
    },
    {
        "name": "Congo",
        "dial_code": "+242",
        "code": "CG"
    },
    {
        "name": "Congo, The Democratic Republic of the Congo",
        "dial_code": "+243",
        "code": "CD"
    },
    {
        "name": "Cook Islands",
        "dial_code": "+682",
        "code": "CK"
    },
    {
        "name": "Costa Rica",
        "dial_code": "+506",
        "code": "CR"
    },
    {
        "name": "Cote d'Ivoire",
        "dial_code": "+225",
        "code": "CI"
    },
    {
        "name": "Croatia",
        "dial_code": "+385",
        "code": "HR"
    },
    {
        "name": "Cuba",
        "dial_code": "+53",
        "code": "CU"
    },
    {
        "name": "Cyprus",
        "dial_code": "+357",
        "code": "CY"
    },
    {
        "name": "Czech Republic",
        "dial_code": "+420",
        "code": "CZ"
    },
    {
        "name": "Denmark",
        "dial_code": "+45",
        "code": "DK"
    },
    {
        "name": "Djibouti",
        "dial_code": "+253",
        "code": "DJ"
    },
    {
        "name": "Dominica",
        "dial_code": "+1767",
        "code": "DM"
    },
    {
        "name": "Dominican Republic",
        "dial_code": "+1849",
        "code": "DO"
    },
    {
        "name": "Ecuador",
        "dial_code": "+593",
        "code": "EC"
    },
    {
        "name": "Egypt",
        "dial_code": "+20",
        "code": "EG"
    },
    {
        "name": "El Salvador",
        "dial_code": "+503",
        "code": "SV"
    },
    {
        "name": "Equatorial Guinea",
        "dial_code": "+240",
        "code": "GQ"
    },
    {
        "name": "Eritrea",
        "dial_code": "+291",
        "code": "ER"
    },
    {
        "name": "Estonia",
        "dial_code": "+372",
        "code": "EE"
    },
    {
        "name": "Ethiopia",
        "dial_code": "+251",
        "code": "ET"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "dial_code": "+500",
        "code": "FK"
    },
    {
        "name": "Faroe Islands",
        "dial_code": "+298",
        "code": "FO"
    },
    {
        "name": "Fiji",
        "dial_code": "+679",
        "code": "FJ"
    },
    {
        "name": "Finland",
        "dial_code": "+358",
        "code": "FI"
    },
    {
        "name": "France",
        "dial_code": "+33",
        "code": "FR"
    },
    {
        "name": "French Guiana",
        "dial_code": "+594",
        "code": "GF"
    },
    {
        "name": "French Polynesia",
        "dial_code": "+689",
        "code": "PF"
    },
    {
        "name": "Gabon",
        "dial_code": "+241",
        "code": "GA"
    },
    {
        "name": "Gambia",
        "dial_code": "+220",
        "code": "GM"
    },
    {
        "name": "Georgia",
        "dial_code": "+995",
        "code": "GE"
    },
    {
        "name": "Germany",
        "dial_code": "+49",
        "code": "DE"
    },
    {
        "name": "Ghana",
        "dial_code": "+233",
        "code": "GH"
    },
    {
        "name": "Gibraltar",
        "dial_code": "+350",
        "code": "GI"
    },
    {
        "name": "Greece",
        "dial_code": "+30",
        "code": "GR"
    },
    {
        "name": "Greenland",
        "dial_code": "+299",
        "code": "GL"
    },
    {
        "name": "Grenada",
        "dial_code": "+1473",
        "code": "GD"
    },
    {
        "name": "Guadeloupe",
        "dial_code": "+590",
        "code": "GP"
    },
    {
        "name": "Guam",
        "dial_code": "+1671",
        "code": "GU"
    },
    {
        "name": "Guatemala",
        "dial_code": "+502",
        "code": "GT"
    },
    {
        "name": "Guernsey",
        "dial_code": "+44",
        "code": "GG"
    },
    {
        "name": "Guinea",
        "dial_code": "+224",
        "code": "GN"
    },
    {
        "name": "Guinea-Bissau",
        "dial_code": "+245",
        "code": "GW"
    },
    {
        "name": "Guyana",
        "dial_code": "+595",
        "code": "GY"
    },
    {
        "name": "Haiti",
        "dial_code": "+509",
        "code": "HT"
    },
    {
        "name": "Holy See (Vatican City State)",
        "dial_code": "+379",
        "code": "VA"
    },
    {
        "name": "Honduras",
        "dial_code": "+504",
        "code": "HN"
    },
    {
        "name": "Hong Kong",
        "dial_code": "+852",
        "code": "HK"
    },
    {
        "name": "Hungary",
        "dial_code": "+36",
        "code": "HU"
    },
    {
        "name": "Iceland",
        "dial_code": "+354",
        "code": "IS"
    },
    {
        "name": "India",
        "dial_code": "+91",
        "code": "IN"
    },
    {
        "name": "Indonesia",
        "dial_code": "+62",
        "code": "ID"
    },
    {
        "name": "Iran, Islamic Republic of Persian Gulf",
        "dial_code": "+98",
        "code": "IR"
    },
    {
        "name": "Iraq",
        "dial_code": "+964",
        "code": "IQ"
    },
    {
        "name": "Ireland",
        "dial_code": "+353",
        "code": "IE"
    },
    {
        "name": "Isle of Man",
        "dial_code": "+44",
        "code": "IM"
    },
    {
        "name": "Israel",
        "dial_code": "+972",
        "code": "IL"
    },
    {
        "name": "Italy",
        "dial_code": "+39",
        "code": "IT"
    },
    {
        "name": "Jamaica",
        "dial_code": "+1876",
        "code": "JM"
    },
    {
        "name": "Japan",
        "dial_code": "+81",
        "code": "JP"
    },
    {
        "name": "Jersey",
        "dial_code": "+44",
        "code": "JE"
    },
    {
        "name": "Jordan",
        "dial_code": "+962",
        "code": "JO"
    },
    {
        "name": "Kazakhstan",
        "dial_code": "+77",
        "code": "KZ"
    },
    {
        "name": "Kenya",
        "dial_code": "+254",
        "code": "KE"
    },
    {
        "name": "Kiribati",
        "dial_code": "+686",
        "code": "KI"
    },
    {
        "name": "Korea, Democratic People's Republic of Korea",
        "dial_code": "+850",
        "code": "KP"
    },
    {
        "name": "Korea, Republic of South Korea",
        "dial_code": "+82",
        "code": "KR"
    },
    {
        "name": "Kuwait",
        "dial_code": "+965",
        "code": "KW"
    },
    {
        "name": "Kyrgyzstan",
        "dial_code": "+996",
        "code": "KG"
    },
    {
        "name": "Laos",
        "dial_code": "+856",
        "code": "LA"
    },
    {
        "name": "Latvia",
        "dial_code": "+371",
        "code": "LV"
    },
    {
        "name": "Lebanon",
        "dial_code": "+961",
        "code": "LB"
    },
    {
        "name": "Lesotho",
        "dial_code": "+266",
        "code": "LS"
    },
    {
        "name": "Liberia",
        "dial_code": "+231",
        "code": "LR"
    },
    {
        "name": "Libyan Arab Jamahiriya",
        "dial_code": "+218",
        "code": "LY"
    },
    {
        "name": "Liechtenstein",
        "dial_code": "+423",
        "code": "LI"
    },
    {
        "name": "Lithuania",
        "dial_code": "+370",
        "code": "LT"
    },
    {
        "name": "Luxembourg",
        "dial_code": "+352",
        "code": "LU"
    },
    {
        "name": "Macao",
        "dial_code": "+853",
        "code": "MO"
    },
    {
        "name": "Macedonia",
        "dial_code": "+389",
        "code": "MK"
    },
    {
        "name": "Madagascar",
        "dial_code": "+261",
        "code": "MG"
    },
    {
        "name": "Malawi",
        "dial_code": "+265",
        "code": "MW"
    },
    {
        "name": "Malaysia",
        "dial_code": "+60",
        "code": "MY"
    },
    {
        "name": "Maldives",
        "dial_code": "+960",
        "code": "MV"
    },
    {
        "name": "Mali",
        "dial_code": "+223",
        "code": "ML"
    },
    {
        "name": "Malta",
        "dial_code": "+356",
        "code": "MT"
    },
    {
        "name": "Marshall Islands",
        "dial_code": "+692",
        "code": "MH"
    },
    {
        "name": "Martinique",
        "dial_code": "+596",
        "code": "MQ"
    },
    {
        "name": "Mauritania",
        "dial_code": "+222",
        "code": "MR"
    },
    {
        "name": "Mauritius",
        "dial_code": "+230",
        "code": "MU"
    },
    {
        "name": "Mayotte",
        "dial_code": "+262",
        "code": "YT"
    },
    {
        "name": "Mexico",
        "dial_code": "+52",
        "code": "MX"
    },
    {
        "name": "Micronesia, Federated States of Micronesia",
        "dial_code": "+691",
        "code": "FM"
    },
    {
        "name": "Moldova",
        "dial_code": "+373",
        "code": "MD"
    },
    {
        "name": "Monaco",
        "dial_code": "+377",
        "code": "MC"
    },
    {
        "name": "Mongolia",
        "dial_code": "+976",
        "code": "MN"
    },
    {
        "name": "Montenegro",
        "dial_code": "+382",
        "code": "ME"
    },
    {
        "name": "Montserrat",
        "dial_code": "+1664",
        "code": "MS"
    },
    {
        "name": "Morocco",
        "dial_code": "+212",
        "code": "MA"
    },
    {
        "name": "Mozambique",
        "dial_code": "+258",
        "code": "MZ"
    },
    {
        "name": "Myanmar",
        "dial_code": "+95",
        "code": "MM"
    },
    {
        "name": "Namibia",
        "dial_code": "+264",
        "code": "NA"
    },
    {
        "name": "Nauru",
        "dial_code": "+674",
        "code": "NR"
    },
    {
        "name": "Nepal",
        "dial_code": "+977",
        "code": "NP"
    },
    {
        "name": "Netherlands",
        "dial_code": "+31",
        "code": "NL"
    },
    {
        "name": "Netherlands Antilles",
        "dial_code": "+599",
        "code": "AN"
    },
    {
        "name": "New Caledonia",
        "dial_code": "+687",
        "code": "NC"
    },
    {
        "name": "New Zealand",
        "dial_code": "+64",
        "code": "NZ"
    },
    {
        "name": "Nicaragua",
        "dial_code": "+505",
        "code": "NI"
    },
    {
        "name": "Niger",
        "dial_code": "+227",
        "code": "NE"
    },
    {
        "name": "Nigeria",
        "dial_code": "+234",
        "code": "NG"
    },
    {
        "name": "Niue",
        "dial_code": "+683",
        "code": "NU"
    },
    {
        "name": "Norfolk Island",
        "dial_code": "+672",
        "code": "NF"
    },
    {
        "name": "Northern Mariana Islands",
        "dial_code": "+1670",
        "code": "MP"
    },
    {
        "name": "Norway",
        "dial_code": "+47",
        "code": "NO"
    },
    {
        "name": "Oman",
        "dial_code": "+968",
        "code": "OM"
    },
    {
        "name": "Pakistan",
        "dial_code": "+92",
        "code": "PK"
    },
    {
        "name": "Palau",
        "dial_code": "+680",
        "code": "PW"
    },
    {
        "name": "Palestinian Territory, Occupied",
        "dial_code": "+970",
        "code": "PS"
    },
    {
        "name": "Panama",
        "dial_code": "+507",
        "code": "PA"
    },
    {
        "name": "Papua New Guinea",
        "dial_code": "+675",
        "code": "PG"
    },
    {
        "name": "Paraguay",
        "dial_code": "+595",
        "code": "PY"
    },
    {
        "name": "Peru",
        "dial_code": "+51",
        "code": "PE"
    },
    {
        "name": "Philippines",
        "dial_code": "+63",
        "code": "PH"
    },
    {
        "name": "Pitcairn",
        "dial_code": "+872",
        "code": "PN"
    },
    {
        "name": "Poland",
        "dial_code": "+48",
        "code": "PL"
    },
    {
        "name": "Portugal",
        "dial_code": "+351",
        "code": "PT"
    },
    {
        "name": "Puerto Rico",
        "dial_code": "+1939",
        "code": "PR"
    },
    {
        "name": "Qatar",
        "dial_code": "+974",
        "code": "QA"
    },
    {
        "name": "Romania",
        "dial_code": "+40",
        "code": "RO"
    },
    {
        "name": "Russia",
        "dial_code": "+7",
        "code": "RU"
    },
    {
        "name": "Rwanda",
        "dial_code": "+250",
        "code": "RW"
    },
    {
        "name": "Reunion",
        "dial_code": "+262",
        "code": "RE"
    },
    {
        "name": "Saint Barthelemy",
        "dial_code": "+590",
        "code": "BL"
    },
    {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "dial_code": "+290",
        "code": "SH"
    },
    {
        "name": "Saint Kitts and Nevis",
        "dial_code": "+1869",
        "code": "KN"
    },
    {
        "name": "Saint Lucia",
        "dial_code": "+1758",
        "code": "LC"
    },
    {
        "name": "Saint Martin",
        "dial_code": "+590",
        "code": "MF"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "dial_code": "+508",
        "code": "PM"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "dial_code": "+1784",
        "code": "VC"
    },
    {
        "name": "Samoa",
        "dial_code": "+685",
        "code": "WS"
    },
    {
        "name": "San Marino",
        "dial_code": "+378",
        "code": "SM"
    },
    {
        "name": "Sao Tome and Principe",
        "dial_code": "+239",
        "code": "ST"
    },
    {
        "name": "Saudi Arabia",
        "dial_code": "+966",
        "code": "SA"
    },
    {
        "name": "Senegal",
        "dial_code": "+221",
        "code": "SN"
    },
    {
        "name": "Serbia",
        "dial_code": "+381",
        "code": "RS"
    },
    {
        "name": "Seychelles",
        "dial_code": "+248",
        "code": "SC"
    },
    {
        "name": "Sierra Leone",
        "dial_code": "+232",
        "code": "SL"
    },
    {
        "name": "Singapore",
        "dial_code": "+65",
        "code": "SG"
    },
    {
        "name": "Slovakia",
        "dial_code": "+421",
        "code": "SK"
    },
    {
        "name": "Slovenia",
        "dial_code": "+386",
        "code": "SI"
    },
    {
        "name": "Solomon Islands",
        "dial_code": "+677",
        "code": "SB"
    },
    {
        "name": "Somalia",
        "dial_code": "+252",
        "code": "SO"
    },
    {
        "name": "South Africa",
        "dial_code": "+27",
        "code": "ZA"
    },
    {
        "name": "South Sudan",
        "dial_code": "+211",
        "code": "SS"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "dial_code": "+500",
        "code": "GS"
    },
    {
        "name": "Spain",
        "dial_code": "+34",
        "code": "ES"
    },
    {
        "name": "Sri Lanka",
        "dial_code": "+94",
        "code": "LK"
    },
    {
        "name": "Sudan",
        "dial_code": "+249",
        "code": "SD"
    },
    {
        "name": "Suriname",
        "dial_code": "+597",
        "code": "SR"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "dial_code": "+47",
        "code": "SJ"
    },
    {
        "name": "Swaziland",
        "dial_code": "+268",
        "code": "SZ"
    },
    {
        "name": "Sweden",
        "dial_code": "+46",
        "code": "SE"
    },
    {
        "name": "Switzerland",
        "dial_code": "+41",
        "code": "CH"
    },
    {
        "name": "Syrian Arab Republic",
        "dial_code": "+963",
        "code": "SY"
    },
    {
        "name": "Taiwan",
        "dial_code": "+886",
        "code": "TW"
    },
    {
        "name": "Tajikistan",
        "dial_code": "+992",
        "code": "TJ"
    },
    {
        "name": "Tanzania, United Republic of Tanzania",
        "dial_code": "+255",
        "code": "TZ"
    },
    {
        "name": "Thailand",
        "dial_code": "+66",
        "code": "TH"
    },
    {
        "name": "Timor-Leste",
        "dial_code": "+670",
        "code": "TL"
    },
    {
        "name": "Togo",
        "dial_code": "+228",
        "code": "TG"
    },
    {
        "name": "Tokelau",
        "dial_code": "+690",
        "code": "TK"
    },
    {
        "name": "Tonga",
        "dial_code": "+676",
        "code": "TO"
    },
    {
        "name": "Trinidad and Tobago",
        "dial_code": "+1868",
        "code": "TT"
    },
    {
        "name": "Tunisia",
        "dial_code": "+216",
        "code": "TN"
    },
    {
        "name": "Turkey",
        "dial_code": "+90",
        "code": "TR"
    },
    {
        "name": "Turkmenistan",
        "dial_code": "+993",
        "code": "TM"
    },
    {
        "name": "Turks and Caicos Islands",
        "dial_code": "+1649",
        "code": "TC"
    },
    {
        "name": "Tuvalu",
        "dial_code": "+688",
        "code": "TV"
    },
    {
        "name": "Uganda",
        "dial_code": "+256",
        "code": "UG"
    },
    {
        "name": "Ukraine",
        "dial_code": "+380",
        "code": "UA"
    },
    {
        "name": "United Arab Emirates",
        "dial_code": "+971",
        "code": "AE"
    },
    {
        "name": "United Kingdom",
        "dial_code": "+44",
        "code": "GB"
    },
    {
        "name": "United States",
        "dial_code": "+1",
        "code": "US"
    },
    {
        "name": "Uruguay",
        "dial_code": "+598",
        "code": "UY"
    },
    {
        "name": "Uzbekistan",
        "dial_code": "+998",
        "code": "UZ"
    },
    {
        "name": "Vanuatu",
        "dial_code": "+678",
        "code": "VU"
    },
    {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "dial_code": "+58",
        "code": "VE"
    },
    {
        "name": "Vietnam",
        "dial_code": "+84",
        "code": "VN"
    },
    {
        "name": "Virgin Islands, British",
        "dial_code": "+1284",
        "code": "VG"
    },
    {
        "name": "Virgin Islands, U.S.",
        "dial_code": "+1340",
        "code": "VI"
    },
    {
        "name": "Wallis and Futuna",
        "dial_code": "+681",
        "code": "WF"
    },
    {
        "name": "Yemen",
        "dial_code": "+967",
        "code": "YE"
    },
    {
        "name": "Zambia",
        "dial_code": "+260",
        "code": "ZM"
    },
    {
        "name": "Zimbabwe",
        "dial_code": "+263",
        "code": "ZW"
    }
]




