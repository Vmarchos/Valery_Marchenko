"use strict"
let form = document.forms.frm
let btn = document.getElementById('button')
let diameter = form.elements.Diameter
let clock = document.getElementById('second')//div с часами
let d1 = 200;//наименее возможный диаметр часов
let d2 = 800;//наиболее возможный диаметр часов
let angle //угол расположения зеленых кружков
let hour = 12 // количество часов
let i = 360;//количество градусов в окружности
const part = 30; //количество градусов в 5 минутах

btn.addEventListener('click', function (EO) {
    EO = EO || window.event;

    if (diameter.value <= d2 && diameter.value >= d1) {//построение часов
        form.style.display = "none"
        let divClock = document.getElementById('divClock')
        divClock.style.margin = "50px";
        let clock = document.getElementById('clock');
        clock.setAttribute("height", diameter.value);
        clock.setAttribute("width", diameter.value);
        let circle = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        clock.appendChild(circle);
        circle.setAttribute("fill", "#fcca66");
        circle.setAttribute("rx", diameter.value / 2);
        circle.setAttribute("ry", diameter.value / 2);
        circle.setAttribute("cx", diameter.value / 2);
        circle.setAttribute("cy", diameter.value / 2);
        let clockRadius = diameter.value / 2.5;
        let clockCenterX = diameter.value / 2;
        let clockCenterY = diameter.value / 2;


        let clockHand3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect')//часовая стрелка
        clock.appendChild(clockHand3)
        clockHand3.setAttribute("fill", "red");
        clockHand3.setAttribute("rx", '2.5');
        clockHand3.setAttribute("ry", '2.55');
        clockHand3.setAttribute("x", diameter.value / 2.02);
        clockHand3.setAttribute("y", diameter.value / 3.4);
        clockHand3.setAttribute('height', 0.53 * clockRadius)
        clockHand3.setAttribute('width', 0.05 * clockRadius)


        let clockHand2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect')//минутная стрелка
        clock.appendChild(clockHand2)
        clockHand2.setAttribute("fill", "blue");
        clockHand2.setAttribute("rx", '2.5');
        clockHand2.setAttribute("ry", '2.55');
        clockHand2.setAttribute("x", diameter.value / 2);
        clockHand2.setAttribute("y", diameter.value / 4.7);
        clockHand2.setAttribute('height', 0.73 * clockRadius)
        clockHand2.setAttribute('width', 0.03 * clockRadius)


        let clockHand = document.createElementNS('http://www.w3.org/2000/svg', 'rect')//секундная стрелка
        clock.appendChild(clockHand)
        clockHand.setAttribute("fill", "black");
        clockHand.setAttribute("rx", '2.5');
        clockHand.setAttribute("ry", '2.55');
        clockHand.setAttribute("x", diameter.value / 2);
        clockHand.setAttribute("y", diameter.value / 5.7);
        clockHand.setAttribute('height', 0.82 * clockRadius)
        clockHand.setAttribute('width', 0.02 * clockRadius)

        for (i; i > 0; i = i - part) {//построение зеленых кружков с цифрами
            green(i)
        }

        function green(i) {//зеленые кружки с цифрами

            angle = i / 180 * Math.PI//зеленые кружки
            let hourDiv = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse')
            let hourNumberCenterX = clockCenterX + clockRadius * Math.sin(angle);
            let hourNumberCenterY = clockCenterY - clockRadius * Math.cos(angle);
            let diameterHour = diameter.value / 15;
            clock.appendChild(hourDiv);
            hourDiv.setAttribute("fill", "#47b281");
            hourDiv.setAttribute("rx", diameterHour);
            hourDiv.setAttribute("ry", diameterHour);
            hourDiv.setAttribute("cx", hourNumberCenterX);
            hourDiv.setAttribute("cy", hourNumberCenterY)

            let hourSpan = document.createElementNS('http://www.w3.org/2000/svg', 'text')//цифры
            hourSpan.textContent = hour;
            hourSpan.setAttribute("x", hourNumberCenterX);
            hourSpan.setAttribute("y", hourNumberCenterY);
            hourSpan.setAttribute("text-anchor", 'middle');
            hourSpan.setAttribute("font-family", 'sans-serif');
            hourSpan.setAttribute("font-size", diameter.value * 0.06);
            clock.appendChild(hourSpan);
            hour--;
        }

        let lineClock = document.createElementNS('http://www.w3.org/2000/svg', 'text')//линейные часы
        clock.appendChild(lineClock);
        lineClock.setAttribute("y", diameter.value / 3);
        lineClock.setAttribute("x", diameter.value / 2.8);
        lineClock.setAttribute("font-size", diameter.value * 0.08)
        lineClock.id = "line"

        updateTime()
        setInterval(updateTime, 1000)

        function updateTime() {
            const currTime = new Date();
            let currTimeStr = formatDateTime(currTime);
            document.getElementById('line').innerHTML = currTimeStr;
            clocks()

            function formatDateTime(dt) {//для линейных часов
                let hours = dt.getHours();
                let minutes = dt.getMinutes();
                let seconds = dt.getSeconds();
                return str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2);
            }
            function str0l(val, len) {//
                let strVal = val.toString();
                while (strVal.length < len)
                    strVal = '0' + strVal;
                return strVal;
            }

            function clocks() {
                let hours = currTime.getHours();
                let minutes = currTime.getMinutes();
                let seconds = currTime.getSeconds();
                let degSeconds = seconds * 6;// положение секундной стрелки каждую секунду
                let degMinutes = minutes * 6 + seconds / 10; // положение минутной стрелки каждую секунду
                let degHours = hours * 30 + minutes / 2;//положение часовой стрелки каждую секунду

                clockHand.setAttribute('transform', `rotate(${degSeconds} ${diameter.value / 2} ${diameter.value / 2} )`)
                clockHand2.setAttribute('transform', `rotate(${degMinutes} ${diameter.value / 2} ${diameter.value / 2} )`)
                clockHand3.setAttribute('transform', `rotate(${degHours} ${diameter.value / 2} ${diameter.value / 2} )`)
                console.log(str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2))
            }
        }
    } else {
        let spanError = document.createElement('span')
        spanError.innerHTML = "Введите число от 200 до 800";
        form.appendChild(spanError)
    }

})