// Обработка форм

/*
    При submit формы происходит событие по умолчанию, страница на которой расположена
    формы обновляется. Мы должны отменить действие по умолчанию

    у input, textarea есть свойство value - это свойство, в котором хранится значение, введеное
        пользователем в тег
*/

// Вывести данные из формы в консоль 
// const form = document.querySelector('form') // находим форму
// const userName = document.querySelector('.user-name') // нахожу input
// const userMessage = document.querySelector('.user-message') // нахожу textarea

// form.addEventListener('submit', function(event) {
//     event.preventDefault() // отменяем действия по умолчанию
    
//     console.log(userName.value, userMessage.value)
// })


// Создать форму в html. В форме должны быть два инпута - имя и цена товара.
// Добавить скрипт, который будет отображать данные из формы при ее отправке в консоли.
// сохранять введенные данные в массиве products в виде объекта

const products = [
    {
        name: "Iphone 13",
        price: 70000
    },
    {
        name: "Iphone 14",
        price: 80000
    }
]

const form = document.querySelector('form')
const productName = document.querySelector('.product-name')
const productPrice = document.querySelector('.product-price')
const notification = document.querySelector('.notification')
const productContainer = document.querySelector('.products-container')

// слушаем отправку форму и вызываем функцию при отправке
form.addEventListener('submit', function(event) {
    event.preventDefault() // отменяем действия по умолчанию (перезагрузка страницы)
    // Собираем объект newProduct с данными из инпутов
    const newProduct = {
        name: productName.value,
        price: Number(productPrice.value) // "25000" -> 25000; string -> number
    }
    // Добавляем объект newProduct в массив
    products.push(newProduct)
    // Очичащем поля ввода
    clearInputs()
    // Отображаем уведомление
    showNotification()
    // Заново отображаем карточки после добавления продукта
    renderProducts()
})

// Функция очистки полей
function clearInputs() {
    productName.value = ''
    productPrice.value = ''
}

function showNotification() {
    notification.style.display = 'block'
    setTimeout(function() {
        notification.style.display = 'none'
    }, 2000)
}
/*
    Метод браузерного планирования

    setTimeout(function() {}, 3000)
    Вызывает функцию переданную первым аргументом через определенный промежуток времени(в м/с)
*/

// Создать функцию, которая будет рендерить product-container для каждого объекта массива products
// forEach(), innerHTML 

function renderProducts() {
    productContainer.innerHTML = ''
    products.forEach(function(product) {
        productContainer.innerHTML += `
            <div class="product-container">
                <p class="product-card-name">${product.name}</p>
                <p class="product-card-price">${product.price}</p>
            </div>
        `
    })
}
renderProducts() // сразу отображаем пользователю продукты из product

/*
        <div class="product-container">
            <p class="product-card-name">Iphone 13</p>
            <p class="product-card-price">70000</p>
        </div>
*/
