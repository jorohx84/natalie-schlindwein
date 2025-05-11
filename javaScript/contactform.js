const fields = document.getElementsByClassName('focus');
let valid = false;
function animateInputFocus(index) {
    removeFocus();
    console.log(index);
    const focusedField = fields[index];
    focusedField.classList.add('focusAnimation');

}
function removeFocus() {
    for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        field.classList.remove('focusAnimation');
    }
}



function validateForm() {
    const fields = document.getElementsByClassName('required');
    removeFocus();
    removeErrorMessages(fields);
    let validate;
    for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        validate = checkFieldInput(field, validate, index);
        if (validate === false) {
            return
        }
    }
    checkPrivacy();
}



function removeErrorMessages(array) {
    const fields = array;
    for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        const errorMessage = document.getElementById(`${field.name}`);
        errorMessage.innerHTML = '';
    }
}

function scrollToDiv(errorMessage) {
    errorMessage.scrollIntoView({
        block: 'center'
    });

}

function checkFieldInput(field, validate, index) {
    const errorMessage = document.getElementById(`${field.name}`);
    if (field.value.trim() === '') {
        errorMessage.innerHTML = `Bitte ${field.name} eingeben`;
        fields[index].classList.add('errorBorder');
        validate = false;
        scrollToDiv(errorMessage);
    } else {
        errorMessage.innerHTML = '';
        fields[index].classList.remove('errorBorder');
        validate = checkFieldType(field, errorMessage, validate)
    }
    return validate
}

function checkFieldType(field, errorMessage, validate) {
    if (field.type === 'email') {
        validate = checkEmail(field, errorMessage);
    } else if (field.type === 'tel') {
        validate = checkPhoneNumber(field, errorMessage)
    }
    return validate
}

function checkEmail(field, errorMessage) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(field.value)) {
        errorMessage.innerHTML = '';
        errorMessage.innerHTML = 'Bitte E-Mail-Adresse prüfen';
        validate = false;
        scrollToDiv(errorMessage);
    } else {
        errorMessage.innerHTML = '';
        validate = true;
    }
    return validate
}

function checkPhoneNumber(field, errorMessage) {
    const phonePattern = /^\+?[0-9\s\-()]{7,}$/;
    if (!phonePattern.test(field.value)) {
        errorMessage.innerHTML = '';
        errorMessage.innerHTML = 'Bitte Telefonnummer prüfen';
        validate = false;
    } else {
        errorMessage.innerHTML = '';
        validate = true;
    }
    return validate
}

function changePrivacy() {
    valid = !valid;
    const checkBox = document.getElementById('privacyImage');

    if (valid === true) {
        checkBox.classList.remove('dnone');
    } else {
        checkBox.classList.add('dnone');
    }
}

function checkPrivacy() {
    console.log(valid);
    const privacyError = document.getElementById('privacyError');
    console.log(privacyError);
    if (valid === false) {
        privacyError.innerHTML = 'Bitte stimmen Sie der Datenschutzerklärung zu';
        return
    } else {
        privacyError.innerHTML = '';
        sendMessage();
    }
}

function resetFormField() {
    const inputfields=document.getElementsByClassName('required');
    for (let index = 0; index < inputfields.length; index++) {
        const field = inputfields[index];
        field.value = '';
    }
   
    changePrivacy();
}

function sendMessage() {
    console.log('Validation erfolgreich');
    resetFormField();
}

