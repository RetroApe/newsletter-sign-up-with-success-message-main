'use strict'

const form = document.getElementById('form');
const email = document.getElementById('email')
const invalidInfo = document.getElementById('invalid-info');
const wrapper = document.querySelector('.wrapper');
const success = document.getElementById('success');
const successButton = document.querySelector('#success .button');

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }



function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);


    if (isValidEmail(data.email)) {
        wrapper.style.opacity = '0';
        wrapper.style.transform = 'translateX(50%)';
        
        success.style.position = 'absolute';
        success.style.display = 'flex';

        setTimeout(() => {
            wrapper.style.display = 'none';
            success.style.opacity = '1';
            success.style.transform = 'translateX(0)'
            success.style.position = 'relative';
            wrapper.style.transform = 'translateX(-40%)'
        }, 700)
    } else {
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


function dismissMessage() {
        success.style.transform = 'translateX(80%)';
        success.style.opacity = '0';
        wrapper.style.position = 'absolute';
        wrapper.style.display = 'block';
    setTimeout(() => {
        success.style.display = 'none';
        wrapper.style.opacity = '1';
        wrapper.style.transform = 'translateX(0)';
        wrapper.style.position = 'relative';
        success.style.transform = 'translateX(-30%)';
    }, 700);
}


form.addEventListener('submit', handleSubmit);
email.addEventListener('keydown', setValid);
successButton.addEventListener('click', dismissMessage);