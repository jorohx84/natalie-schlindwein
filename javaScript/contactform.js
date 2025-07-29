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
    const defaultLang = localStorage.getItem("lang") || "de";
    const fields = document.getElementsByClassName('required');
    removeFocus();
    removeErrorMessages(fields);
    let validate;
    for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        validate = checkFieldInput(field, validate, index, defaultLang);
        if (validate === false) {
            return
        }
    }
    checkPrivacy(defaultLang);
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

function checkFieldInput(field, validate, index, defaultLang) {
    const errorLabel = translations[defaultLang][field.name]
    const errorMessage = document.getElementById(`${field.name}`);
    if (field.value.trim() === '') {
        if (defaultLang === 'de') {
            errorMessage.innerHTML = `Bitte ${errorLabel} eingeben`;
        } else if (defaultLang === 'en') {
            errorMessage.innerHTML = `Please enter your ${errorLabel}`;
        } else if (defaultLang === 'es') {
            errorMessage.innerHTML = `Por favor, introduce tu ${errorLabel}`;
        }
        fields[index].classList.add('errorBorder');
        validate = false;
        scrollToDiv(errorMessage);
    } else {
        errorMessage.innerHTML = '';
        fields[index].classList.remove('errorBorder');
        validate = checkFieldType(field, errorMessage, validate, defaultLang)
    }
    return validate
}

function checkFieldType(field, errorMessage, validate, defaultLang) {
    if (field.type === 'email') {
        validate = checkEmail(field, errorMessage, defaultLang);
    } else if (field.type === 'tel') {
        validate = checkPhoneNumber(field, errorMessage, defaultLang)
    }
    return validate
}

function checkEmail(field, errorMessage, defaultLang) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(field.value)) {
        errorMessage.innerHTML = '';
        const errorText = translations[defaultLang].contactEmailError;
        errorMessage.innerHTML = `${errorText}`;
        validate = false;
        scrollToDiv(errorMessage);
    } else {
        errorMessage.innerHTML = '';
        validate = true;
    }
    return validate
}

function checkPhoneNumber(field, errorMessage, defaultLang) {
    const phonePattern = /^\+?[0-9\s\-()]{7,}$/;
    if (!phonePattern.test(field.value)) {
        errorMessage.innerHTML = '';
         const errorText = translations[defaultLang].contactPhoneError;
        errorMessage.innerHTML = `${errorText}`;
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
console.log(valid);

    if (!valid) {
        checkBox.classList.remove('showCheckBox');
    } else {
        checkBox.classList.add('showCheckBox');
    }
}

function checkPrivacy(defaultLang) {
    console.log(valid);
    const privacyError = document.getElementById('privacyError');
    console.log(privacyError);
    if (valid === false) {
        const errorText = translations[defaultLang].contactPrivacyError;
        privacyError.innerHTML = `${errorText}`;
        return
    } else {
        privacyError.innerHTML = '';
        sendMessage();
    }
}

function resetFormField() {
    const inputfields = document.getElementsByClassName('required');
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

