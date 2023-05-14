const dialog = document.querySelector('#login');
const trigger = document.querySelector('#careersGPT-link');

trigger.addEventListener('click', () => {
    dialog.showModal();
})

document.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.close();
    }
})