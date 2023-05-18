const dialog = document.querySelector('#login');
const trigger = document.querySelector('#careersGPT-link');
const gbtn = document.querySelector('#google-btn');
const dialog_sign = document.querySelector('#signup');
const trigger_sign = document.querySelector('#signup-link');
const trigger_login = document.querySelector('#login-link');


trigger.addEventListener('click', () => {
    dialog.showModal();
})

trigger_sign.addEventListener('click', () => {
    dialog.close();
    dialog_sign.showModal();
})

trigger_login.addEventListener('click', () => {
    dialog_sign.close();
    dialog.showModal();
    console.log("Dialog closed");
})

gbtn.addEventListener('click', () => {
    console.log("HEY");
    window.location.href = '/accounts/google/login';
})