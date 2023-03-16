// Работа со стилями
/*
    Element.classList - свойство, с помощью которого можно просматривать и управлять классами элемента

    .classList.add('className') - добавляет класс к элементу
    .classList.remove('className') - удаляет класс элемента 
    .classList.contains('className') - проверяет существует ли класс у элемента
    .classList.toggle('className') - переключает класс. если есть, удаляет. если нет, добавляет 
    .classList.replace('oldClassName', 'newClassName') - заменяем класс другим классом
*/

// Добавить к первому квадрату класс green по клику
const item1 = document.querySelector('.item-1')
item1.addEventListener('click', function() {
    item1.classList.add('green')
})

// Удалить класс red у второго элемента по клику на него
const item2 = document.querySelector('.item-2')
item2.addEventListener('click', function() {
    item2.classList.remove('red')
})

// Переключать класс active третьего квадрата
const item3 = document.querySelector('.item-3')
item3.addEventListener('click', function() {
    item3.classList.toggle('active')
})

// console.log(item2.classList.contains('blue')) // если у элемента есть класс вернется true, нет - false

// Создать 10 тегов p. При клике на них, добавить класс activeText. 
// При втором клике на элемент, возвращать его в исходную точку. 
const textContainer = document.querySelector('.text-container')
function createText() { // создает 10 тегов p
    for(let i = 0; i < 10; i++) {
        textContainer.innerHTML += '<p class="text"> Hello World </p>' 
    }
}
createText() // immediately invoke function - немедленный вызов функции

const texts = document.querySelectorAll('.text') // Находим теги p. [p, p, {}.addEventListener, {}]
texts.forEach(function(text) {
    text.addEventListener('click', function() {
        text.classList.toggle('active-text')
    })
})


// Есть массив объектов. Каждый объект имеет свойства en и ru.
// В en написано слово на английском языке, в ru на русском. Изначально должно отображаться 
// слово на русском, при нажатии на него менять на английский перевод и обратно. 

const words = [
    {
        en: "Car",
        ru: "Машина"
    },
    {
        en: "Apple",
        ru: "Яблоко"
    },
    {
        en: "Laptop",
        ru: "Ноутбук"
    }
]
// В words-container положить столько div, сколько объектов в массиве words. Разметка ниже.
// Создать функцию, которая рисует три контейнера с русским и английским словом.
// createWords()

function createWords() {
    const wordsContainer = document.querySelector('.words-container') // нахожу контейнер для слов
    words.forEach(function(item) { // item - array[i] - каждый элемент массива
        wordsContainer.innerHTML += `
            <div class="word-container">
                <p class="word-ru"><span>${item.ru}</span></p>
                <p class="word-en"><span>${item.en}</span></p>
            </div>
        `
    })
}
createWords() // создает контейнеры со словами на рус и англ

// При нажатии на русское слово, спрятать его и отобразить английское
const wordsRu = document.querySelectorAll('.word-ru') // список русских слов 
wordsRu.forEach(function(word) {
    word.addEventListener('click', function() {
        word.firstElementChild.style.display = 'none'
        word.nextElementSibling.firstElementChild.style.display = 'block'
    })
})

// При нажатии на английское слово, спрять его и отобразить русское
const wordsEn = document.querySelectorAll('.word-en')
wordsEn.forEach(function(word) {
    word.addEventListener('click', function() {
        word.firstElementChild.style.display = 'none'
        word.previousElementSibling.firstElementChild.style.display = 'block'
    })
})

// nextElementSibling - возвращает следующий соседний элемент
// previousElementSibling - возвращает предыдуший соседний элемент
// firstElementChild - первый дочерний элемент


/*
    <div class="word-container">
            <p class="word-ru">Машина</p>
            <p class="word-en">Car</p>
    </div>

    <p>Lorem Ipsum <span class="red">dolor<span> sit amet</p>
    span - строчный элемент
    .red {
        color: red;
    }
*/