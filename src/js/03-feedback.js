import '../css/common.css';
import '../css/03-feedback.css'

const LOCALE_STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const userData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

savingData();

function onFormSubmit(e) {
    e.preventDefault();

    userData.email = e.target.email.value;
    userData.message = e.target.message.value;
    console.log(userData);

    localStorage.removeItem(LOCALE_STORAGE_KEY);
    e.currentTarget.reset();
}


function onFormInput(e) {
    userData.email = e.target.email.value;
    userData.message = e.target.message.value;
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(userData));
};

function savingData() {
    const savedData = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));
    if (savedData) {
        form.email.value = savedData.email
        form.message.value = savedData.message;
    }
}