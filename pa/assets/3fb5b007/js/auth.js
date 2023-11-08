document.addEventListener('DOMContentLoaded', () => {
    const checkFilledFields = (inputsSelector, submitBtnSelector, checkboxSelector) => {
        const inputs = document.querySelectorAll(inputsSelector);
        const submitBtn = document.querySelector(submitBtnSelector);
        const checkboxs = document.querySelectorAll(checkboxSelector);

        if (inputs) {
            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    if (checked()) {
                        for	(const input of inputs) {
                            if (input.value === "") {
                                submitBtn.setAttribute('disabled', '');
                                return;
                            }
                        }
                        submitBtn.removeAttribute('disabled');
                    }else{
                        submitBtn.setAttribute('disabled', '');
                    }
                });
            });
        }
    
        if (checkboxs) {
            checkboxs.forEach(function(e){
                e.addEventListener('change', () => {
                    if (checked() && inputVal()) {
                        submitBtn.removeAttribute('disabled');
                    } else{
                        submitBtn.setAttribute('disabled', '');
                    }
                });
            });
        }

        function checked(){
            let flag=true;
            checkboxs.forEach(element=>{
                if (!element.checked){                    
                    flag=false;
                    return false;
                }
            });
            return flag;
        }
        function inputVal(){
            let flag=true;
            inputs.forEach(input => {
                if (input.value === "") {
                    flag=false;
                    return false;
                }                            
            });
            return flag;
        }
    };

    checkFilledFields('.investments .auth-page_main .form-control', 
    '.investments .btn-primary-main[type="submit"]', 
    '.investments .chkbx .chkbx__input');
   
    const clearInputBtns = document.querySelectorAll('.investments .cross-clear__btn');

    if (clearInputBtns) {
        clearInputBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                const target = e.currentTarget;

                target.previousElementSibling.children[1].value = '';
            });
        })
    }

    const togglePasswordTypeBtns = document.querySelectorAll('.investments .eye-control__btn');

    if (togglePasswordTypeBtns) {
        togglePasswordTypeBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                const target = e.currentTarget;

                target.parentElement.classList.toggle('pass-show');

                if (target.parentElement.classList.contains('pass-show')) {
                    target.previousElementSibling.children[1].setAttribute('type', 'text');
                } else {
                    target.previousElementSibling.children[1].setAttribute('type', 'password');
                }
            })
        });
    }

    const inputPhoneElem = document.querySelector('.investments #signupform-phone');

    if (inputPhoneElem) {
        inputPhoneElem.addEventListener('input', () => [
            inputPhoneElem.value = inputPhoneElem.value.replace(/[a-zA-Z]/g, '')
        ]);
    }

    const inputPass = document.querySelector('.investments [id*=-password]');
    const inputRepeatPass = document.querySelector('.investments [id*=-repeat_password]');

    if (inputPass) {
        inputPass.addEventListener('input', () => {
            inputRepeatPass.value = inputPass.value;
        });
    }
});
