"use strict";

let formEl = document.querySelector("form");
let nameFieldEl = document.querySelector(".name");
let phoneFieldEl = document.querySelector(".phone");
let emailFieldEl = document.querySelector(".email");
let textareaEl = document.querySelector("textarea");
// console.log(/^[а-яА-ЯёЁa-zA-Z]+$/gi.test("ывваропншкешкева"));


formEl.addEventListener('submit', formValidChecker);

function formValidChecker(event) {
    if (nameFieldEl.value == '' || !/^[а-яА-ЯёЁa-zA-Z]+$/gi.test(nameFieldEl.value)) {
        nameFieldEl.style.borderColor = "red";
        nameFieldEl.insertAdjacentHTML("afterend", '<p class="name-err" style="color: red">Input correct name! Use letters only</p>');
        event.preventDefault();
    }

    // нашла регулярку, сама еще не готова по ТЗ сделать tel-валидацию
    if (phoneFieldEl.value == '' || !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phoneFieldEl.value)) {
        phoneFieldEl.style.borderColor = "red";
        phoneFieldEl.insertAdjacentHTML("afterend", '<p class="phone-err" style="color: red">Input correct phone number! Use template in input-field</p>');
        event.preventDefault();
    }

    // нашла регулярку, сама еще не готова по ТЗ сделать mail-валидацию
    if (emailFieldEl.value == '' || !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i.test(emailFieldEl.value)) {
        emailFieldEl.style.borderColor = "red";
        emailFieldEl.insertAdjacentHTML("afterend", '<p class="email-err" style="color: red">Input correct email!</p>');
        event.preventDefault();
    }

    if (textareaEl.value == '') {
        textareaEl.style.borderColor = "red";
        textareaEl.insertAdjacentHTML("afterend", '<p class="message-err" style="color: red">Input your message</p>');
        event.preventDefault();
    }
}