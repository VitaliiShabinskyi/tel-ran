/*
    Создание элементов. 
    ELement.createElement("tagName") - метод для создания элемента(тэга)
        Element.appendClild() - метод добавления элемента
    Element.innerHTML - свойство, которое позволяет добавить разметку в DOM 
    Element.insertAdjacentHTML(позиция, "tag")
        позиция:
            а) beforebegin - создает тэг до элемента
            б) afterbegin - создает тэг внутри элемента, до первого чайлда
            в) beforeend - создает тэг внутри элемента, после последнего чайлда
            г) afterend - создает тэг после элемента
*/

// Создать тег p с текстом Hello World. createElement("")
// const item = document.querySelector('.item') // получаем элемент, в который хотим положить тег
// const text = document.createElement('p') // создает тег p 
// text.innerText = "Hello World" // добавляет текст "Hello World" в созданный тег p
// item.appendChild(text) // добавляем элемент text внутрь тега item

// Создать тег p с текстом "Hello World innerHTML". innerHTML
// console.log(item.innerHTML)
// item.innerHTML += "<p>Hello World innerHTML</p>"
// item.innerHTML = item.innerHTML + "<p>Hello World innerHTML</p>"

// item.innerHTML += "<p>Hello World innerHTML</p>"

// Создать 10 тегов <p>Hello</p> внутри div, используя for и innerHTML
// const item = document.querySelector('.item')
// for(let i = 0; i < 10; i++) {
//     // console.log(item.innerHTML)
//     item.innerHTML += "<p>Hello World</p>"
// }

// Создать 3 тега а, название и ссылки для этих тегов взять из массива
// const links = [
//     {
//         name: "Google",
//         link: "https://google.com"
//     },
//     {
//         name: "Facebook",
//         link: "https://fb.com"
//     },
//     {
//         name: "Instagram",
//         link: "https://instagram.com"
//     }
// ]

// const item = document.querySelector('.item')

// for(let i = 0; i < links.length; i++) {
//     item.innerHTML += ` 
//         <a href="${links[i].link}">${links[i].name}</a>
//     `
// }

// Задача. Создать несколько тегов h4, в каждом теге должен быть имя из массива
// const names = ["Arsen", "Cholpon", "Oksana", "Vladimir", "Illya", "Anya"]
// const item = document.querySelector('.item')
// for(let i = 0; i < names.length; i++) {
//     item.innerHTML += `<h4>Ваше имя: ${names[i]}</h4>`
// }

// // Задача. Создать несколько картинок. Ссылка на картинки хранится в массиве
// const images = ["./lake.jpg", "./stones.jpg", "./sunset.jpg"]
// // Добавить три картинки и в массиве напишите путь к ним
// const item = document.querySelector('.item')
// for(let i = 0; i < images.length; i++) {
//     item.innerHTML += `<img src="${images[i]}">`
// }

// images.length = 3
// 1. i = 0, 0 < 3 - true, item.innerHTML += `<img src="./lake.jpg">`, i++
// 2. i = 1, 1 < 3 - true, item.innerHTML += `<img src="./stones.jpg">`, i++
// 3. i = 2, 2 < 3 - true, item.innerHTML += `<img src="./sunset.jpg">`, i++
// 4. i = 3, 3 < 3 - false, ВЫХОД ИЗ ЦИКЛА


// Задача. Создать разметку Вопрос-Ответ из массива.
// Для каждого объекта внутри info добавить свойства:
    // 1) img: "путь к картинке". Картинки и пути к ним у вас есть
    // 2) views: 24, случайное число
    const info = [
        {
            question: "Какой тег используется для создания главного заголовка",
            img: "./lake.jpg",
            answer: "Для создания главного заголовка используется тег h1",
            views: "24"
        },
        {
            question: "Как добавить картинку в html?",
            answer: "Картинку в html можно добавить с помощью тега img",
            img: "./stones.jpg",
            views: "50"
        },
        {
            question: "Как изменить размер шрифта текста",
            answer: "Для изменения размера шрифта текста используется css свойство font-size",
            img: "./sunset.jpg",
            views: "70"
        }
    ]
    
    const containerQA = document.querySelector('.qa')
    for(let i = 0; i < info.length; i++) {
        containerQA.innerHTML += `
            <div class="qa-item">
                <p class="qa-question">${info[i].question}</p>
                <img src="${info[i].img}">
                <p class="qa-answer">${info[i].answer}</p>
                <p>${info[i].views}</p>
            </div>
        `
    }
    /*
            <div class="qa-item">
                <p class="qa-question">Как вас зовут</p>
                <img src="">
                <p class="qa-answer">Меня зовут Арсен</p>
                <p>Количество просмотров: {число}</p>
            </div>
    */
    
    // Задача. Создать карточки товаров из массива products. 
    // Отобразить только те товары, цена которых больше 60000
    const products = [
        {
            name: "Iphone 13",
            price: 50000
        },
        {
            name: "Iphone 14",
            price: 70000
        },
        {
            name: "Iphone 14 Pro",
            price: 80000
        }
    ]
    
    const productsContainer = document.querySelector('.products')
    for(let i = 0; i < products.length; i++) {
        if(products[i].price > 60000) {
            productsContainer.innerHTML += `
                <div class="product">
                    <h5 class="product-name">${products[i].name}</h5>
                    <p class="product-price">${products[i].price}</p>
                </div>
            `
        }
    }
    
    /*
        <div class="product" style="color: red; width: 50%;">
            <h5 class="product-name">{название продукта}</h5>
            <p class="product-price">{цена продукта}</p>
        </div>
    */
    
    
    
    // <img src="./lake.jpg">
    // <img src="./stones.jpg">
    /*
        div = {
            innerHTML: "<img src="" alt="">
            <a href="">Hello</a>"
        }
    
        div.innerHTML = "<p>Hello World innerHTML</p>"
    */
    
    