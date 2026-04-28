import { closeFormPopup, openLoginForm, openSignupForm } from "./formPopup.js";

const overlay = document.querySelector('.dark-overlay');
const signupTriggers = document.querySelectorAll('.signup-popup, .open-signup');
const loginTriggers = document.querySelectorAll('.login-popup, .open-login');
const cancelButtons = document.querySelectorAll('.cancel-form-popup');

const signupFormContainer = overlay?.querySelector('.signup-container');
const loginFormContainer = overlay?.querySelector('.login-container');

signupTriggers.forEach((button) => {
    button.addEventListener('click', () => openSignupForm(overlay, signupFormContainer));
});

loginTriggers.forEach((button) => {
    button.addEventListener('click', () => openLoginForm(overlay, loginFormContainer));
});

cancelButtons.forEach((button) => {
    button.addEventListener('click', () => closeFormPopup(overlay));
});

overlay?.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeFormPopup(overlay);
    }
});

