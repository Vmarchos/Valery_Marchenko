"use strict"
const formElem = document.forms.f1;
const razElem = formElem.elements.razrab;
const siteName = formElem.elements.sitename;
const siteUrl = formElem.elements.siteurl;
//const siteDate = formElem.elements.launchdate;
//const siteVisitors = formElem.elements.visitors;
//const hEmail = formElem.elements.email;
//const divGroup = formElem.elements.division;
//const placing = formElem.elements.payment;
//const hVote = formElem.elements.votes;
//const reviews = formElem.elements.description;

razElem.addEventListener("blur", (eo) => razValid(false))
siteName.addEventListener("blur", (eo) => nameValid(false))
siteUrl.addEventListener("blur", (eo) => urlValid(false))
//siteDate.addEventListener("blur", (eo) => dateValid(false))
//siteVisitors.addEventListener("blur", visitorsValid)
//hEmail.addEventListener("blur", emailValid)
//divGroup.addEventListener("blur", divisionValid)
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
        razrErrorElem = ''

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
        nameErrorElem = ''

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
        urlErrorElem = ''

    }
    return errFlag;

};
