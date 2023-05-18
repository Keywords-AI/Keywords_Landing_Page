const wait = document.querySelector('#wait-btn');
const dialog = document.querySelector('#login');
const trigger = document.querySelector('#careersGPT-link');
const dialog_sign = document.querySelector('#signup');
const trigger_sign = document.querySelector('#signup-link');
const trigger_login = document.querySelector('#login-link');

wait.addEventListener('click', () => {
    console.log("HEY");
    dialog.showModal();
})

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

document.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.close();
    }
    if (e.target === dialog_sign) {
        dialog_sign.close();
    }
})