export function hidePopup(overlay) {
    if (!overlay) return;
    overlay.classList.remove('active');
}

export function showPopup(overlay) {
    if (!overlay) return;
    overlay.classList.add('active');
}

function hideAllPopupForms(overlay) {
    if (!overlay) return;
    const formContainers = overlay.querySelectorAll('.signup-container, .login-container');
    formContainers.forEach((form) => {
        form.classList.remove('active');
    });
}

export function openSignupForm(overlay, signupForm) {
    showPopup(overlay);
    hideAllPopupForms(overlay);
    if (signupForm) {
        signupForm.classList.add('active');
    }
}

export function openLoginForm(overlay, loginForm) {
    showPopup(overlay);
    hideAllPopupForms(overlay);
    if (loginForm) {
        loginForm.classList.add('active');
    }
}

export function closeFormPopup(overlay) {
    hidePopup(overlay);
}