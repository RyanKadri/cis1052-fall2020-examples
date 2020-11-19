function validateAge(age) {
    if(age < 13 || age > 117) {
        return false;
    } else {
        return true;
    }
}

function validateName(name) {
    if(name[0] !== name[0].toUpperCase()) {
        return false;
    }
    if(name.includes(" ")) {
        return false;
    }
    for(let i = 1; i < name.length; i++) {
        if(name[i] !== name[i].toLowerCase()) {
            return false;
        }
    }
    const letterMatcher = /^[a-zA-Z]+$/
    return letterMatcher.test(name);
}

function handlePassword() {
    const passwordInput = document.querySelector("#password");
    const firstNameInput = document.querySelector("#firstName");
    const lastNameInput = document.querySelector("#lastName");
    const passwordErrorEl = document.querySelector("#password-error")
    if(validatePassword(passwordInput.value, firstNameInput.value, lastNameInput.value, ["password"])) {
        passwordErrorEl.innerText = ""
    } else {
        passwordErrorEl.innerText = "The password is invalid"
    }
}

function validatePassword(password, firstName, lastName, commonPasswords) {
    if(password.length < 6) {
        return false;
    }
    if(password.includes(firstName) || password.includes(lastName)) {
        return false;
    }
    if(commonPasswords.includes(password)) {
        return false;
    }
    if(isRepeatingCharacters(password)) {
        return false;
    }
    return true;
}

function isRepeatingCharacters(password) {
    for(let i = 0; i < password.length - 1; i++) {
        if(password[i] !== password[i + 1]) {
            return false;
        }
    }
    return true;
}