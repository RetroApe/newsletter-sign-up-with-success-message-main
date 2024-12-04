'use strict'

const form = document.getElementById('form');
const email = document.getElementById('email')
const invalidInfo = document.getElementById('invalid-info');



function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);  

    if (data.email === '') {
        email.classList.replace('valid', 'invalid');
        invalidInfo.style.opacity = '1';
        invalidInfo.style.transform = 'translateY(0)'
    }

}

function setValid() {
    email.classList.replace('invalid', 'valid');
    invalidInfo.style.opacity = '0';
    invalidInfo.style.transform = 'translateY(0.75rem)'
}

form.addEventListener('submit', handleSubmit);
email.addEventListener('keydown', setValid);