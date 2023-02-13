"use strict"
const formElem = document.forms.f1;
const razElem = formElem.elements.razrab;
const siteName = formElem.elements.sitename;
const siteUrl = formElem.elements.siteurl;
const siteDate = formElem.elements.launchdate;
const siteVisitors = formElem.elements.visitors;
const hEmail = formElem.elements.email;
const divGroup = formElem.elements.division;
//const placing = formElem.elements.payment;
//const hVote = formElem.elements.votes;
//const reviews = formElem.elements.description;

razElem.addEventListener("blur", (eo) => razValid(false))
siteName.addEventListener("blur", (eo) => nameValid(false))
siteUrl.addEventListener("blur", (eo) => urlValid(false))
siteDate.addEventListener("blur", (eo) => dateValid(false))
siteVisitors.addEventListener("blur", (eo) => visitorsValid(false))
hEmail.addEventListener("blur", (eo) => emailValid(false))
divGroup.addEventListener("click", (eo) => divisionValid(false))
//placing.addEventListener("blur", paymentValid)
//hVote.addEventListener("blur", votesValid)
//reviews.addEventListener("blur", descriptionValid)

formElem.addEventListener("submit", formValid);

function formValid(eo) {
    eo = eo || window.event;
    let errFlag = false;
    errFlag = errFlag || razValid(!errFlag);
    errFlag = errFlag || nameValid(!errFlag);
    errFlag = errFlag || urlValid(!errFlag);
    errFlag = errFlag || visitorsValid(!errFlag);
    errFlag = errFlag || dateValid(!errFlag);
    errFlag = errFlag || emailValid(!errFlag);
    errFlag = errFlag || divisionValid(!errFlag);
    if (errFlag) {
        eo.preventDefault();
    }





};
function razValid(focusOnError) {

    const razrErrorElem = document.getElementById('razrError');
    let errFlag = false;
    const value = razElem.value;

    if (!value) {
        razrErrorElem.innerHTML = 'Заполните поле!'
        errFlag = true;
        if (focusOnError) {
            razElem.focus();
        }


    }
    else {
        razrErrorElem.innerHTML = ''

    }
    return errFlag;

};
function nameValid(focusOnError) {

    const nameErrorElem = document.getElementById('nameError');
    let errFlag = false;
    const value = siteName.value;

    if (!value) {
        nameErrorElem.innerHTML = 'Заполните поле!'
        errFlag = true;
        if (focusOnError) {
            siteName.focus();
        }


    }
    else {
        nameErrorElem.innerHTML = ''

    }
    return errFlag;

};
function urlValid(focusOnError) {

    const urlErrorElem = document.getElementById('urlError');
    let errFlag = false;
    const value = siteUrl.value;

    if (!value) {
        urlErrorElem.innerHTML = 'Заполните поле!'
        errFlag = true;
        if (focusOnError) {
            siteUrl.focus();
        }


    }
    else {
        urlErrorElem.innerHTML = ''

    }
    return errFlag;

};
function dateValid(focusOnError) {
    const dateErrorElem = document.getElementById('dateError');
    let errFlag = false;
    const value = siteDate.value;
    if (!value) {
        dateErrorElem.innerHTML = "Выберите дату!"
        errFlag = true;
        if (focusOnError) {
            siteDate.focus();
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
    if (value == "") {
        divErrorElem.innerHTML = "выберите рубрику каталога!"
        errFlag = true;
        if (focusOnError) {
            divGroup.focus();
        }
    }
    else {
        divErrorElem.innerHTML = ""
    }
    return errFlag;
}