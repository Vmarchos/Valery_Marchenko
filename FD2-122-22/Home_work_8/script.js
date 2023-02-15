"use strict"
const formElem = document.forms.f1;
const razElem = formElem.elements.razrab;
const siteName = formElem.elements.sitename;
const siteUrl = formElem.elements.siteurl;
const siteDate = formElem.elements.launchdate;
const siteVisitors = formElem.elements.visitors;
const hEmail = formElem.elements.email;
const divGroup = formElem.elements.division;
const placing = formElem.elements.payment;
const hVote = formElem.elements.votes;
const reviews = formElem.elements.description;
const radioDiv = document.getElementById('radioDiv');


razElem.addEventListener("blur", (eo) => razValid(false))
siteName.addEventListener("blur", (eo) => nameValid(false))
siteUrl.addEventListener("blur", (eo) => urlValid(false))
siteDate.addEventListener("blur", (eo) => dateValid(false))
siteVisitors.addEventListener("blur", (eo) => visitorsValid(false))
hEmail.addEventListener("blur", (eo) => emailValid(false))
divGroup.addEventListener("click", (eo) => divisionValid(false))
radioDiv.addEventListener("blur", (eo) => paymentValid(false))
hVote.addEventListener("change", (eo) => votesValid(false))
reviews.addEventListener("blur", (eo) => descriptionValid(false))

formElem.addEventListener("submit", formValid, false);


function formValid(eo) {
    eo = eo || window.event;
    let errFlag = false;
    errFlag = errFlag || razValid(!errFlag);
    errFlag = errFlag || nameValid(!errFlag);
    errFlag = errFlag || urlValid(!errFlag);
    errFlag = errFlag || dateValid(!errFlag);
    errFlag = errFlag || visitorsValid(!errFlag);
    errFlag = errFlag || emailValid(!errFlag);
    errFlag = errFlag || divisionValid(!errFlag);
    errFlag = errFlag || paymentValid(!errFlag);
    errFlag = errFlag || votesValid(!errFlag);
    errFlag = errFlag || descriptionValid(!errFlag);
    razValid();
    nameValid();
    urlValid();
    dateValid();
    visitorsValid();
    emailValid();
    divisionValid();
    paymentValid();
    votesValid();
    descriptionValid();
    if (errFlag) {
        eo.preventDefault();
    }
};






function razValid(focusOnError) {

    const razrErrorElem = document.getElementById('razrError');
    var errFlag = false;
    const value = razElem.value;
    if (!value) {
        console.log('первая валидация')
        razrErrorElem.innerHTML = 'Заполните поле!';

        if (focusOnError)
            razElem.focus();
        razElem.scrollIntoView();
        errFlag = true;



    }
    else {
        razrErrorElem.innerHTML = '';


    }
    return errFlag;
};
function nameValid(focusOnError) {

    const nameErrorElem = document.getElementById('nameError');
    var errFlag = false;
    const value = siteName.value;

    if (!value) {
        console.log('вторая валидация')
        nameErrorElem.innerHTML = 'Заполните поле!';
        if (value == '') {
            nameErrorElem.innerHTML = 'Заполните поле!';
        }
        if (focusOnError)
            siteName.focus();
        siteName.scrollIntoView();
        errFlag = true;



    }
    else {
        nameErrorElem.innerHTML = '';

    }
    return errFlag;

};
function urlValid(focusOnError) {

    const urlErrorElem = document.getElementById('urlError');
    var errFlag = false;
    const value = siteUrl.value;

    if (!value) {
        urlErrorElem.innerHTML = 'Заполните поле!'
        if (focusOnError)
            siteUrl.focus();
        siteUrl.scrollIntoView();
        errFlag = true;



    }
    else {
        urlErrorElem.innerHTML = ''

    }
    return errFlag;

};
function dateValid(focusOnError) {
    const dateErrorElem = document.getElementById('dateError');
    var errFlag = false;
    const value = siteDate.value;
    if (!value) {
        dateErrorElem.innerHTML = "Выберите дату!"
        errFlag = true;
        if (focusOnError) {
            siteDate.focus();
            siteDate.scrollIntoView();
        }
    }
    else {
        dateErrorElem.innerHTML = ''

    }
    return errFlag;
};
function visitorsValid(focusOnError) {
    const visitErrorElem = document.getElementById('visitorError');
    let errFlag = false;
    const value = siteVisitors.value;

    if (!String(value)) {
        visitErrorElem.innerHTML = 'Пожалуйста введите число!'
        errFlag = true;
        if (focusOnError) {
            siteVisitors.focus();
            siteVisitors.scrollIntoView();
        }


    }
    else {
        visitErrorElem.innerHTML = ''

    }
    return errFlag;
};
function emailValid(focusOnError) {
    const mailErrorElem = document.getElementById('mailError');
    let errFlag = false;
    const value = hEmail.value;
    if (!value) {
        mailErrorElem.innerHTML = "заполните поле!"
        errFlag = true;
        if (focusOnError) {
            hEmail.focus();
            hEmail.scrollIntoView();
        }
    }
    else {
        mailErrorElem.innerHTML = "";

    }
    return errFlag;
};

function divisionValid(focusOnError) {
    const divErrorElem = document.getElementById('divError');
    let errFlag = false;
    const value = divGroup.value;
    if (value === "1") {
        divErrorElem.innerHTML = "выберите рубрику каталога!"
        errFlag = true;
        if (focusOnError) {
            divGroup.focus();
            divGroup.scrollIntoView();
        }
    }
    else {
        divErrorElem.innerHTML = ""

    }
    return errFlag;
};
function paymentValid(focusOnError) {
    const paymentErrorElem = document.getElementById('paymentError');
    let errFlag = false;
    const value = placing.value;

    if (!value) {
        paymentErrorElem.innerHTML = "выберите что-то из списка!"
        errFlag = true;
        if (focusOnError) {
            radioDiv.focus();
            radioDiv.scrollIntoView();
        }

    }
    else {
        paymentErrorElem.innerHTML = ""

    }
    return errFlag;
};
function votesValid(focusOnError) {
    const votesErrorElem = document.getElementById('votesError')
    let errFlag = false;
    if (!hVote.checked) {
        votesErrorElem.innerHTML = "Разрешите отзывы!"
        errFlag = true;
        if (focusOnError) {
            hVote.focus();
            hVote.scrollIntoView();
        }
    }
    else {
        votesErrorElem.innerHTML = "";

    }
    return errFlag;
};
function descriptionValid(focusOnError) {
    const reviewsErrorElem = document.getElementById('reviwsError')
    let errFlag = false;
    const value = reviews.value
    if (!value) {
        reviewsErrorElem.innerHTML = "Напишите что-нибудь!"
        errFlag = true;
        if (focusOnError) {
            reviews.focus();
            reviews.scrollIntoView();
        }

    }
    else {
        reviewsErrorElem.innerHTML = ''

    }
    return errFlag;

};
