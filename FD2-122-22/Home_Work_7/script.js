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
        { label: 'Опубликовать:', kind: 'submit' },
    ];

var formDef2 =
    [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { label: 'Зарегистрироваться:', kind: 'submit' },
    ];
function buildForm(fD, fE) {
    fD.forEach(element => {
        var formL = document.createElement('label');
        formL.innerHTML = element.label;
        fE.appendChild(formL);
        if (element.kind == 'longtext') {
            var bT = document.createElement('input');
            bT.type = 'text';
            fE.appendChild(bT);
            var indent = document.createElement('br');
            fE.appendChild(indent);
            bT.name = element.name
        };
        if (element.kind == 'number') {
            var bT = document.createElement('input');
            bT.type = 'number';
            fE.appendChild(bT);
            var indent = document.createElement('br');
            fE.appendChild(indent);

        };
        if (element.kind == 'shorttext') {
            var bT = document.createElement('input');
            bT.type = 'text';
            fE.appendChild(bT);
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
            var bT = document.createElement('input');
            bT.type = 'checkbox';
            fE.appendChild(bT);
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
            bT.value = element.label;
            fE.appendChild(bT);
            var indent = document.createElement('br');
            fE.appendChild(indent);
            fE.removeChild(formL);
        };
    });
};

buildForm(formDef1, document.forms.f1);
buildForm(formDef2, document.forms.f2);

