// 1. Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const square1 = document.querySelector('.task1-square');
const btn1 = document.querySelector('.task1-btn');

btn1.addEventListener('click', function() {
    square1.style.backgroundColor = '#0f0'
})

// 2. Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const square2 = document.querySelector('.task2-square');
const btn2 = document.querySelector('.task2-btn');

btn2.addEventListener('click', function() {
    square2.style.backgroundColor = '#00f';
    console.log('****** Задание №2 ******\r\nNew color: ' + square2.style.backgroundColor);
})

// 3. Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

const square3 = document.querySelector('.task3-square');
const btn3 = document.querySelector('.task3-btn');

btn3.addEventListener('click', function() {
    square3.style.width = square3.clientWidth + 20 + 'px';
    square3.style.height = square3.clientHeight + 20 + 'px';
})

// 4. Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

const btn4 = document.querySelector('.task4-btn');
const root1 = document.querySelector('.root.task4');

btn4.addEventListener('click', function() {
    const p = document.createElement('p');
    p.style.color = 'blue';
    p.innerText = 'Lorem ipsum dolor sit amet.';
    root1.appendChild(p);
})

// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const btn5 = document.querySelector('.task5-btn');
const root2 = document.querySelector('.root.task5');
let pColor = 'blue';

btn5.addEventListener('click', function() {
    const p = document.createElement('p');
    p.style.color = pColor;
    pColor=='blue' ? pColor='green' : pColor='blue';
    p.innerText = 'Lorem ipsum dolor sit amet.';
    root2.appendChild(p);
})

