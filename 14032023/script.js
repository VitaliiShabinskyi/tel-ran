/*
    События в JS
    События - это сигналы о действиях пользователя на html странице.

    Element.addEventListener() - метод, который позволяет повесить слушатель события на элемент(тэг)
    .addEventListener(тип события, коллбэк-функция)
    
    тип события: 
        а) click
        б) submit
        в) input
        г) change

    коллбэк-функция - функция обратного вызова, ее вызов передан в другую функцию или метод. 
    коллбэк-функция запускается тогда, когда произошло событие. 

    объект Event - информация или данные о событии, которое произошло в браузере. 
*/

// Повесить слушатель события на кнопку и при клике на нее в консоли отображать "Hello"
// const btn = document.querySelector('.btn') //  находим кнопку

// btn.addEventListener('click', function() {
//     console.log('hello')
// })

// function greeting() {
//     console.log('hello')
// }
// btn.addEventListener('click', greeting)
// greeting() // immediately invoke function - немедленный вызов функции


// // При клике на кнопку увеличивать число на 1 и отображать его в консоли/в теге p. 
// const btn = document.querySelector('.btn')
// const count = document.querySelector('.count')

// let num = 0
// btn.addEventListener('click', function(event) {
//     console.log(event)
//     num++ // инкремент - увеличение переменной на 1. num = num + 1. num += 2
//     count.innerText = num 
// })

// // innerText - возвращает текстовый контент или меняет его
// // <div>Hello world</div>.innerText - Hello World

// // Создать еще одну кнопку, при нажатии на которую уменьшать значение в теге p на 1
// const btnMinus = document.querySelector('.btn-minus')
// btnMinus.addEventListener('click', function(event) {
//     console.log(event)
//     num-- 
//     count.innerText = num 
// })


// // При клике на кнопку red, менять квадрат на красный цвет
// const redBtn = document.querySelector('.red')
// const square = document.querySelector('.item')

// redBtn.addEventListener('click', function() {
//     square.style.backgroundColor = 'salmon'
// })

// // При клике на кнопку "Зеленый" менять цвет квадрата на зеленый
// const greenBtn = document.querySelector('.green')

// greenBtn.addEventListener('click', function() {
//     square.style.backgroundColor = 'seagreen'
// })


// При нажатии на кнопку менять цвет квадрата на соответствующий
// const buttons = document.querySelectorAll('button') // [button, button1, button2, button3]
// const square = document.querySelector('.item')
// buttons.forEach(function(button) {
//     button.addEventListener('click', function(event) {
//         const color = event.target.className // className - цвет, на который нужно поменять цвет квадрата
//         square.style.backgroundColor = color
//     })
// })

// 1. Найти все кнопки. querySelectorAll() // nodeList() [].addEventListener
// 2. Повесить слушатель события на каждую. forEach()
// 3. При клике читать какой-либо атрибут с цветом кнопки
// 4. Менять цвет квадрата на прочитанный цвет из атрибута

// style - свойство элемента(тега)
/*
    tagName = {
        innerText : "Текст",
        innerHTML : "HTML разметка",
        className: "item",
        style: {
            backgroundColor: ""
        }
    }
    tagName.style.backgroundColor = "red"

    event = {
        target : {
            className: "red"
        }
    }
    event.target.className
*/

/* 
    Array.forEach(function() {}) - метод упорядоченных списков, который позволяет выполнить переданную коллбэк-функцию
     для каждого элемента массива

    В коллбэк функции, которую передаем, можем получить несколько аргументов
        1. item - каждый элемент массива (текущий элемент). array[i]
        2. index - индекс текущего элемнта массива. i
        3. array - сам массив, на котором вызван метод
*/

// Есть массив имен, нужно отобразить каждое имя в консоли в таком виде 'Привет, {имя}'

// const names = ['Anya', 'Oksana', 'Anton', 'Leonid']

// for(let i = 0; i < names.length; i++) {
//     console.log("Привет, " + names[i])
// }

// names.forEach(function(name) {
//     console.log(name)
// })


// Есть массив чисел. С помощью forEach() вывести в консоли каждое число * 2

// const numbers = [5, 7, 9, 11, 20, 100] // 10, 14

// numbers.forEach(function(num) {
//     console.log(num * 2)
// })


// Привет, {имя}. Как дела?
// "Привет," + name + ". Как дела?" - конкатенация
// `Привет ${name}. Как дела?` - интерполяция


// При клике на картинку в блоке слайды, отображать ее в блоке фулл

const imagesSlides = document.querySelectorAll('.image-slide') // картинки-слайдеры
const imageFull = document.querySelector('.img-full') // полная картинка

imagesSlides.forEach(function(image) {
    image.addEventListener('click', function(event) {
        const imgPath = event.target.getAttribute('src') // значение атрибута src картинки по которой кликнули
        imageFull.setAttribute('src', imgPath)
    })
})
