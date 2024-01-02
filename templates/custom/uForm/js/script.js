/*! uForm v2.3 */
let showLog = !1;

// method of notification after sending ('message' or 'modal')
let handlerType = 'message';
let uFormFilePath = '/templates/custom/uForm/';
// message about the result of sending
let failMessage = 'Something went wrong... Do it again a little later';
let successMessage = 'Request sent successfully';
const callBackFormModal = document.querySelector('[data-graph-path=modalCallback]');
const subscribeFormModal = document.querySelector('[data-graph-path=modalSubscribe]');
const cvFormModal = document.querySelector('[data-graph-path=modalCV]');
// forms, form fields and their validation
const uForms = {
  uForm_1: {
    handlerType: handlerType,
    failMessage: failMessage,
    successMessage: successMessage,
    prefix: '_1',
    validation: {
      uForm__name_1: {
        validLen: [2, 50]
      },
      uForm__tel_1: {
        validTel
      },
    },
  },
  uForm_2: {
    handlerType: handlerType,
    failMessage: failMessage,
    successMessage: successMessage,
    prefix: '_2',
    validation: {
      uForm__email_2: {
        validEmail
      },
    },
  },
  uForm_3: {
    handlerType: handlerType,
    failMessage: failMessage,
    successMessage: successMessage,
    prefix: '_3',
    validation: {
      uForm__name_3: {
        validLen: [2, 50]
      },
      uForm__email_3: {
        validEmail
      },
      uForm__tel_3: {
        validTel
      },
    },
  },
  uForm_4: {
    handlerType: handlerType,
    failMessage: failMessage,
    successMessage: successMessage,
    prefix: '_4',
    validation: {
      uForm__name_4: {
        validLen: [2, 50]
      },
      uForm__lname_4: {
        validLen: [2, 50]
      },
      uForm__place_4: {
        validLen: [2, 50]
      },
      uForm__tel_4: {
        validTel
      },
      uForm__email_4: {
        validEmail
      },
      uForm__summary_4: {
        validLen: [2, 50]
      },
      uForm__file_4: {
        validSizeOneFile: [150] // KB - default
      },
    },
  },
};

//--------------------------------------------------------
// validation functions ----------------------------------
//--------------------------------------------------------
function validTel(item, empty = true) {
  if(empty && item.value.length == 0)
    return true;

  let errMsg = 'Incorrect phone number format';
  let telRegExp = /^\+?\d{7,25}/g;

  let itemVal = item.value.replace(/[()-]|\s/g,'');
  if (!itemVal.match(telRegExp))
    return errMsg;
  return true;
}

function validEmail(item, empty = true) {
  if(empty && item.value.length == 0)
    return true;

  let errMsg = 'invalid format e-mail';
//    let emailRegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
  let emailRegExp = /.+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+$/g;

  if (!item.value.match(emailRegExp))
    return errMsg;
  return true;
}

function validLen(item, min, max, empty = true) {
  let n = item.value.length;
  let errMsg = '';

  if(empty && n == 0){
    return true;
  }
  else if(n < min){
    errMsg = 'Enter at least '+ min +' characters';
  } else if(n > max) {
    errMsg = 'character limit exceeded: '+ max;
  }

  return (errMsg == '')? true : errMsg;
}

function validSizeOneFile(item, sizeLimit, unit = 'КБ') {
  let file;
  let limitByte;
  let files = item.files;

  switch(unit){
    case 'МБ':
      limitByte = sizeLimit* 1024 * 1024;
      break;
    case 'Б':
      limitByte = sizeLimit;
      break;
    default:
      unit = 'КБ';
      limitByte = sizeLimit * 1024;
  }

  for (let i = 0; i < files; i++) {
    if(file = files[i]){
      if(file.size > limitByte){
        return 'превышен допустимый лимит размера файла: '+ sizeLimit +' '+ unit;
      }
    }
  }

  return true;
}

function validSizeAllFiles(item, sizeLimit, unit = 'КБ') {
  let files = item.files;
  let fullSize = 0;
  let limitByte;
  let errMsg = '';

  switch(unit){
    case 'МБ':
      limitByte = sizeLimit* 1024 * 1024;
      break;
    case 'Б':
      limitByte = sizeLimit;
      break;
    default:
      unit = 'КБ';
      limitByte = sizeLimit * 1024;
  }

  if(files){
    for (let i = 0; i < files.length; i++) {
      fullSize += files[i].size;
    }

    if(fullSize > limitByte){
      errMsg = 'превышен допустимый лимит общего размера файлов: '+ sizeLimit +' '+ unit;
    }
  }
  return (errMsg == '')? true : errMsg;
}

function validCountFiles(item, maxCount) {
  let files = item.files;
  let errMsg = '';

  if(files && files.length > maxCount){
    errMsg = 'допускается загрузка файлов: '+ maxCount;
  }
  return (errMsg == '')? true : errMsg;
}

function validationForm(instance) {
  let valid = true;

  for(let inp in uForms[instance.id].validation) {
    let testInput = document.getElementById(inp);
    jQuery(testInput).blur();
    if (testInput.uFormValid !== undefined && testInput.uFormValid == false) {
      valid = false;
    }
  }

  return valid;
}
//--------------------------------------------------------
// and - validation functions ----------------------------
//--------------------------------------------------------
//--------------- output info ----------------------------

function addErrorWarning(instance, msg){
  let oroginBorder = jQuery(instance).css('border');

  instance.uFormValid = false;
  jQuery(instance).css('border', '2px #ff6a64 solid');
  jQuery(instance).on('focus', function (e) {
    jQuery(instance).css('border', oroginBorder);
    jQuery(instance).off(e);
    instance.uFormValid = true;
  })
  printError(instance.form.uFormPrefix, msg);
}

function printError(uFormPrefix, msg) {
  let uFormErr = jQuery('#uForm__error-msg'+ uFormPrefix);
  if(showLog) { console.log('uFormPrefix, msg, uFormErr'); console.log(uFormPrefix); console.log(msg); console.log(uFormErr); }

  uFormErr.show();
  uFormErr.append('<p></p>');
  jQuery('#uForm__error-msg'+ uFormPrefix +' > p:last-child').html('*' + msg);

  setTimeout(function () {
    jQuery('#uForm__error-msg'+ uFormPrefix).hide();
    jQuery('#uForm__error-msg'+ uFormPrefix +' > p').html('');
  }, 7000);
}

// change the message text
function changeMessageText(instance, status) {
  let statusMsg = '';
  if (status === true) {
    statusMsg = instance.uFormSuccessMsg;
  } else if (status === false) {
    statusMsg = instance.uFormFailMsg;
  } else {
    statusMsg = status;
  }
  jQuery('#uForm__modal'+ instance.uFormPrefix +' .uForm__modal-text').html(statusMsg + '');
}

// message output
function printMessageText(instance, status) {

  let uForm = jQuery(instance);
  let statusMsg = '';

  uForm.html('');
  uForm.append('<p id="uForm__message-text'+ instance.uFormPrefix +'" class="message-text"></p>')

  if (status === true) {
    statusMsg = instance.uFormSuccessMsg;
  } else if(status === false) {
    statusMsg = instance.uFormFailMsg;
  } else {
    statusMsg = status;
  }
  jQuery('#uForm__message-text'+ instance.uFormPrefix).html(statusMsg + '');
}

let isOpened = false;
function toggleModal(uFormPrefix) {
  if (!isOpened) {
    jQuery('#uForm__modal'+ uFormPrefix +', #uForm__overlay'+ uFormPrefix).css('display', 'block');
    isOpened = true;
  } else {
    jQuery('#uForm__modal'+ uFormPrefix +', #uForm__overlay'+ uFormPrefix).css('display', 'none');
    isOpened = false;
  }
}
//--------------- and- output info -------------------------




//----------------------------------------------------------
let jQ = false;
let mt = (window.MooTools !== undefined) ? window.$ : false;
initJQ(mt);

function initJQ(mt) {
  if (window.jQuery === undefined) {
    if (!jQ) {
      jQ = true;
      document.write('<scr' + 'ipt type="text/javascript" src="'+ uFormFilePath +'js/jquery-3.3.1.min.js"></scr' + 'ipt>');
    }
    setTimeout('initJQ(mt)', 50);
  } else {
    if (mt) window.$ = mt;

    (function ($) {
      $(function () {

        for (let uFormId in uForms) {
          let formInstance = $('#' + uFormId);
          if(formInstance[0] === undefined){
            delete uForms[uFormId];
            continue;
          }

          if(showLog){ console.log('uFormId, formInstance[0]'); console.log(uFormId); console.log(formInstance[0]); }

          formInstance[0].uFormHandlerType = (uForms[uFormId].handlerType)? uForms[uFormId].handlerType : handlerType;
          formInstance[0].uFormFailMsg = (uForms[uFormId].failMessage)? uForms[uFormId].failMessage : failMessage;
          formInstance[0].uFormSuccessMsg = (uForms[uFormId].successMessage)? uForms[uFormId].successMessage : successMessage;
          formInstance[0].uFormPrefix = (uForms[uFormId].prefix)? uForms[uFormId].prefix : '';

          // modal functional
          $('#uForm__modal'+ formInstance[0].uFormPrefix +' button, #uForm__overlay'+ formInstance[0].uFormPrefix).click(function () {
            toggleModal(formInstance[0].uFormPrefix);
          });

          formInstance.submit(function (event) {
            event.preventDefault();

            let valid = validationForm(this);
            if (!valid){
              showResult(this, 'Некоторые поля заполненные не корректно');
              return;
            }

            let formData = new FormData(this);
            formData.append('uFormUrl', window.location.href);
            formData.append('uFormId', this.id);

            let smform = this;
            if (window.smetrics) {
              if (smform.smIsJs) {
                if (!document.smetrics_sended) {
                  document.smetrics_sended = true;
                  setTimeout(function () {
                    delete document.smetrics_sended;
                  }, 8000);
                  window.smetrics.dataCollection(smform);
                }
              }
            } else {
//              console.log('~700');
            }

            $('#uForm__preload' + smform.uFormPrefix).fadeIn();

            $.ajax({
              type: "POST",
              url: uFormFilePath + "sform.php",
              contentType: false,
              processData: false,
              data: formData,
              timeout: 6000,
              statusCode: {
                403: function () {
                  showResult(smform, false);
                },
                200: function (data) {
                  if(true){ console.log(data); }
                  let answer = JSON.parse(data);
                  if(answer.success){
                    switch (smform.uFormPrefix) {
                      case '_1':
                        callBackFormModal.click();
                        break;
                      case '_2':
                        subscribeFormModal.click();
                        break;
                      case '_4':
                        cvFormModal.click();
                        break;
                    }
                    showResult(smform, true);
                    $('#uForm__reset' + smform.uFormPrefix).click();
                  } else {
                    showResult(smform, false);
                    console.log(answer.info);
                  }
                }
              },
              error: function(answer){
                showResult(smform, false);
                console.log(answer.statusText);
              },
            })
          });
        }

        // the result of sending
        function showResult(instance, status) {
          if(showLog) { console.log('showResult: instance, status, instance.uFormHandlerType'); console.log(instance); console.log(status); console.log(instance.uFormHandlerType); }

          $('#uForm__preload' + instance.uFormPrefix).fadeOut();

          if (instance.uFormHandlerType === 'modal') {
            changeMessageText(instance, status);
            toggleModal(instance.uFormPrefix);
          }
          else if (instance.uFormHandlerType === 'message') {
            printMessageText(instance, status);
          }
        }

        // adding validators
        for (let uFormId in uForms) {
          if(showLog) console.log('uFormId: ' + uFormId);

          let testForm = uForms[uFormId].validation;
          for (let uInput in testForm) {
            if(showLog) console.log('uInput: ' + uInput);

            let curInput = testForm[uInput];
            let testInput = $('#'+uFormId + ' #'+uInput);

            if (testInput[0] === undefined){
              console.log('missing imput: ' + uInput);
              delete uForms[uFormId].validation.uInput;
              continue;
            }

            for (let validFuncName in curInput) {
              if(showLog) console.log('validFuncName: ' + validFuncName);

              let validFunc = curInput[validFuncName];
              if (Array.isArray(validFunc)) {
                if(showLog) console.log('func arr: ');
                $(testInput[0]).on('blur', function (e) {
                  let result = eval( validFuncName + '(testInput[0], validFunc[0], validFunc[1], validFunc[2], validFunc[3], validFunc[4]);');

                  if (result !== true) {
                    addErrorWarning(this, result);
                  }
                });
              } else {
                if(showLog) console.log('this is function: ');
                $(testInput[0]).on('blur', function (e) {
                  let result = validFunc(testInput[0]);

                  if (result !== true) {
                    addErrorWarning(this, result);
                  }
                });
              }
            }
          }
        }
        // and - adding validators
      })
    })(jQuery)
  }
}
