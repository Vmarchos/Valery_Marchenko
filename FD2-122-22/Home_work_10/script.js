"use strict"
let form = document.forms.frm
let btn = document.getElementById('button')
let diameter = form.elements.Diameter
let clock = document.getElementById('second')//div с часами
let d1 = 200;//наименее возможный диаметр часов
let d2 = 800;//наиболее возможный диаметр часов
let angle //угол расположения зеленых кружков
let hour = 12 // количество часов
const circle = 360;//количество градусов в окружности
const part = 30; //количество градусов в 5 минутах
const l = 2.5 //для расчета растояния от центра циферблата до границы div зеленого круга
const ms = 6 // для получения начального значения угла минутной и секундной стрелок
const h = 30 //для получения начального значения угла часовой стрелки
const secondsAngle = 6; //шаг увеличение угла секундной стрелки
const minutesAngle = 0.1;//шаг увеличения угла минутной стрелки с каждой секундой
const hoursAngle = 0.0083;//шаг увеличения угла часовой стрелки с каждой секундой

btn.addEventListener('click', function (EO) {
    EO = EO || window.event;

    if (diameter.value <= d2 && diameter.value >= d1) {//построение часов
        form.style.display = "none"
        clock.style.width = diameter.value + 'px';
        clock.style.height = diameter.value + 'px';
        clock.style.borderRadius = '50%';
        clock.style.backgroundColor = "#fcca66";
        clock.style.position = 'absolute';
        let clockRadius = diameter.value / l;
        let clockCenterX = clock.offsetLeft + clock.offsetWidth / 2;
        let clockCenterY = clock.offsetTop + clock.offsetHeight / 2;

        let clockHand = document.createElement('div')//секундная стрелка
        clock.appendChild(clockHand)
        clockHand.style.position = 'absolute';
        clockHand.style.height = 0.8 * clockRadius + 'px'
        clockHand.style.width = 0.02 * clockRadius + 'px'
        clockHand.style.top = diameter.value / 5.7 + 'px'
        clockHand.style.left = diameter.value / 2 + 'px'
        clockHand.style.background = "black"
        clockHand.style.transformOrigin = "bottom center";
        clockHand.style.borderRadius = "10px";
        clockHand.style.zIndex = "10"


        let clockHand2 = document.createElement('div')//минутная стрелка
        clock.appendChild(clockHand2)
        clockHand2.style.position = 'absolute';
        clockHand2.style.height = 0.7 * clockRadius + 'px'
        clockHand2.style.width = 0.03 * clockRadius + 'px'
        clockHand2.style.top = diameter.value / 4.7 + 'px'
        clockHand2.style.left = diameter.value / 2 + 'px'
        clockHand2.style.background = "blue"
        clockHand2.style.transformOrigin = "bottom center";
        clockHand2.style.borderRadius = "10px";


        let clockHand3 = document.createElement('div')//часовая стрелка
        clock.appendChild(clockHand3)
        clockHand3.style.position = 'absolute';
        clockHand3.style.height = 0.5 * clockRadius + 'px'
        clockHand3.style.width = 0.05 * clockRadius + 'px'
        clockHand3.style.top = diameter.value / 3.4 + 'px'
        clockHand3.style.left = diameter.value / 2.02 + 'px'
        clockHand3.style.background = "red"
        clockHand3.style.transformOrigin = "bottom center";
        clockHand3.style.borderRadius = "30px";



        for (let i = circle; i > 0; i = i - part) {//построение зеленых кружков с цифрами
            green(i)
        }

        function green(i) { //цифры

            let hourDiv = document.createElement('div')
            let hourSpan = document.createElement('span')
            hourSpan.textContent = hour
            hourSpan.style.position = "absolute"
            hourSpan.style.top = "20%"
            hourSpan.style.left = "35%"
            hourSpan.style.fontSize = diameter.value * 0.06 + "px"
            clock.appendChild(hourDiv);
            hourDiv.appendChild(hourSpan)
            hour--

            //кружки      
            angle = i / 180 * Math.PI;
            let hourNumberCenterX = clockCenterX + clockRadius * Math.sin(angle);
            let hourNumberCenterY = clockCenterY - clockRadius * Math.cos(angle);
            let diameterHour = diameter.value / 8;
            hourDiv.style.width = diameterHour + 'px';
            hourDiv.style.height = diameterHour + 'px';
            hourDiv.style.left = Math.round(hourNumberCenterX - hourDiv.offsetWidth / 2) + 'px';
            hourDiv.style.top = Math.round(hourNumberCenterY - hourDiv.offsetHeight / 2) + 'px';
            hourDiv.style.position = 'absolute';
            hourDiv.style.backgroundColor = "#47b281"
            hourDiv.style.borderRadius = '50%';
        }

        let lineClock = document.createElement('span')//линейные часы
        clock.appendChild(lineClock)
        lineClock.style.position = "absolute"
        lineClock.style.top = diameter.value / 4 + 'px'
        lineClock.style.left = diameter.value / 2.8 + 'px'
        lineClock.style.fontSize = diameter.value * 0.08 + "px"
        lineClock.id = "line"

        updateTime()
        setInterval(updateTime, 1000);//таймер

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

            function str0l(val, len) {
                let strVal = val.toString();
                while (strVal.length < len)
                    strVal = '0' + strVal;
                return strVal;
            }

            function clocks() {//для секундной стрелки       
                const seconds = currTime.getSeconds();
                let rotateCount = seconds * ms
                clockHand.style.transform = 'rotate(' + rotateCount + 'deg)';
                rotateCount += secondsAngle
                //для минутной стрелки         
                const minutes = currTime.getMinutes();
                let rotateCount2 = minutes * ms + seconds / 10;
                clockHand2.style.transform = 'rotate(' + rotateCount2 + 'deg)';
                rotateCount2 += minutesAngle
                // для часовой стрелки 
                const hours = currTime.getHours();
                let rotateCount3 = hours * h + minutes / 2;
                clockHand3.style.transform = 'rotate(' + rotateCount3 + 'deg)';
                rotateCount3 += hoursAngle;
                console.log(str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2))
            }
        }
    } else {
        let spanError = document.createElement('span')
        spanError.innerHTML = "Введите число от 200 до 800";
        form.appendChild(spanError)
    }

})
