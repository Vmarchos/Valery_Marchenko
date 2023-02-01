"use strict"
var formDef1 =
    [
        { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
        { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
        { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
        { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
        },
        { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
        { label: 'Описание сайта:', kind: 'memo', name: 'description' },
        { caption: 'Опубликовать', kind: 'submit' },
    ];

var formDef2 =
    [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { caption: 'Зарегистрироваться', kind: 'submit' },
    ];
function createInput(element, fE, inputType) {
    const bT = document.createElement('input');
    bT.type = inputType;
    bT.name = element.name;
    fE.appendChild(bT);

};

function buildForm(fD, fE) {
    fD.forEach(element => {
        var formL = document.createElement('label');
        formL.innerHTML = element.label;
        fE.appendChild(formL);
        if (element.kind == 'longtext') {
            createInput(element, fE, 'text')
            var indent = document.createElement('br');
            fE.appendChild(indent);

        };
        if (element.kind == 'number') {
            createInput(element, fE, 'number')
            var indent = document.createElement('br');
            fE.appendChild(indent);

        };
        if (element.kind == 'shorttext') {
            createInput(element, fE, 'text')
            var indent = document.createElement('br');
            fE.appendChild(indent);

        };
        if (element.kind == 'combo') {
            var bT = document.createElement('select');
            fE.appendChild(bT);
            var indent = document.createElement('br');
            fE.appendChild(indent);
            element.variants.forEach(element2 => {
                var tagOption = document.createElement('option');
                tagOption.setAttribute('value', element2.value);
                tagOption.textContent = element2.text;
                bT.appendChild(tagOption);

            });
        };
        if (element.kind == 'radio') {
            element.variants.forEach(element2 => {
                var bT = document.createElement('input');
                bT.type = 'radio';
                bT.name = "payment";
                bT.setAttribute('value', element2.value);
                var newSpanRadio = document.createElement('span');
                newSpanRadio.textContent = element2.text;
                fE.appendChild(bT);
                fE.appendChild(newSpanRadio);
                var indent = document.createElement('br');
                fE.appendChild(indent);
            });
        };
        if (element.kind == 'check') {
            createInput(element, fE, 'checkbox')
            var indent = document.createElement('br');
            fE.appendChild(indent);
        };
        if (element.kind == 'memo') {
            var bT = document.createElement('textarea');
            bT.style.cssText = 'width: 400px; height: 50px';
            fE.appendChild(bT);
            var indent = document.createElement('br');
            fE.appendChild(indent);
        };
        if (element.kind == 'submit') {
            var bT = document.createElement('input');
            bT.type = 'submit';
            bT.value = element.caption;
            fE.appendChild(bT);
            var indent = document.createElement('br');
            fE.appendChild(indent);
            fE.removeChild(formL);
        };
    });
};

buildForm(formDef1, document.forms.f1);
buildForm(formDef2, document.forms.f2);

