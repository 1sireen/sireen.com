// JavaScript to toggle the visibility of the login form
const loginForm = document.querySelector('.login-form');
const signInLink = document.querySelector('#sign-in-link');

signInLink.addEventListener('click', () => {
    loginForm.style.display = 'block';
});
