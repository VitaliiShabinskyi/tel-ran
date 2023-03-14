/*
    Поиск элемнтов или навигация по DOM-дереву. 

    Element.querySelector('селектор') - позволяет найти первый элемент, соотв-й селектору
        возвращает null, если не нашел подобных элементов
    Element.querySelectorAll('селектор') - позволяет найти все элементы, соотв-е селектору
    
    селектор:  
    1) селектор по тегу h1 {}
    2) селектор по классу .item {}
    3) селектор по id  #id {}

    .item {
        color: red;
    }
    obj = {
        name: "Arsen",
    }

    p = {
        className: "text"
    }
    p.className
*/

// // Внутри document найди тег p
// console.log(document.querySelector('p'))

// // Внутри document найди тег с классом text
// const text = document.querySelector('.text')
// console.log(text.className)

// // Найти все теги p
// const texts = document.querySelectorAll('p')
// console.log(texts)


/*
    innerText - свойство, которое позволяет прочитать или задать текстовое содержимое тега(элемента)
*/

/*
    // Найти первый тег p и поменять его значение на Hello Arsen
    const text = document.querySelector('p')
    console.log(text.innerText) // смотрю, что лежит в свойство innerText у тега 
    text.innerText = 'Hello Arsen'

    // document.querySelector('p').innerText = 'Hello Arsen'

    // найти тег по классу text и поменять его значение на Привет, мир 
    const text2 = document.querySelector('.text')
    text2.innerText = 'Привет, мир'

    // найти элемент с id item и заменить его текстовое содержимое на "Google"
    const link = document.querySelector('#item')
    link.innerText = 'Google'
*/

/*
// Найти все элементы с классом text и во всех заменить текстовое содержимое на "Привет!"
const texts = document.querySelectorAll('.text')
// console.log(texts[0].innerText)
texts[0].innerText = 'Привет!'
texts[1].innerText = 'Привет!'
texts[2].innerText = 'Привет!'
texts[3].innerText = 'Привет!'

// С помощью цикла for заменить текстовое содержимое каждого элемента массив texts на "Привет!"
for(let i = 0; i < texts.length; i++) {
    texts[i].innerText = 'Привет'
}
// array[i] - каждый элемент, текущий элемент
*/

/*
// найти все элементы с классом item и заполнить их значениям от 1 до 10, используя for
const items = document.querySelectorAll('.item')
console.log(items)
for(let i = 0; i < items.length; i++) {
    items[i].innerText = i + 1
}

// items.length = 10
// 1. i = 0, 0 < 10 - true, items[0].innerText = 0 + 1, i++
// 2. i = 1, 1 < 10 - true, items[1].innerText = 1 + 1  
// 3. i = 2, 2 < 10 -true, items[2].innerText = 2 + 1

*/

/*
// Получить в консоли все ссылки тегов a. с помощью цикла for

const links = document.querySelectorAll('a')
// console.log(links)
for(let i = 0; i < links.length; i++) {
    console.log(links[i].getAttribute('href'))
}
*/

// В элементе с классом youtube, в атрибуте href лежит неверная ссылка, заменить ее на правильную

const youtubeLink = document.querySelector('.youtube')
youtubeLink.setAttribute('href', 'https://youtube.com')

// {}.setAttribute 
// All - [{}.setAttribute, {}.setAttibute, {}]

// Каждому тегу img изменить атрибут src на "./img1.jpg", чтобы 
// отобразились три картинки, с помощью for

const images = document.querySelectorAll('img')
for(let i = 0; i < images.length; i++) {
    // Исправить, чтобы отобразились разные картинки
    images[i].setAttribute('src', `./img${i + 1}.jpg`)
}

// `` - шаблонный литерал 


const name = "Arsen"
const surname = "Iusupov"

const fullName = `Меня зовут ${name}, а моя фамилия ${surname}`
console.log(fullName)

// window.name

// <img src="img1.jpg"
// <img src="img2.jpg"

// Поменять тело цикла таким образом, чтобы для каждой картинки
// отображалась соответствующая


/*
    getAttribute('название атрибута') - получение значение атрибута тега по его названию
    setAttribute('название атрибута', 'значение') - задаем значение атрибута тега
*/

// const googleLink = document.querySelector('a')
// console.log(googleLink.getAttribute('href'))
// console.log(googleLink.href) // /images https://mysite.com/images
