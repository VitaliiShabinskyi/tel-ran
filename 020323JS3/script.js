/*
    Объект
    Типы данных:
        1) примитивы
            а) строка - "Hello", "Arsen", "100"
            б) число - 3.14, 100, 5030
        2) сложные 
            а) Объект
                Массив - это частный случай объекта. const arr = []
    
    Объект - это набор свойств, каждое свойство это описание какого-либо объекта.
    Свойство состоит из ключа и значения. Свойством может быть любой тип данных
    const obj = {
        key: value
    }
*/

/*
    // пустой объект
    const obj = {}

    // Объект ноутбука
    const laptop = {
        mark: "HP",
        model: "Pavilion 15-eg",
        price: 51000,
        cpu: "Intel Core i5",
        material: ["пластик", "алюминий"]
    }
    console.log(laptop.mark)
    console.log(laptop.material) //  ["пластик", "алюминий"]
    console.log(laptop.material[1]) // аллюминий
*/

// Задача. Создать любой объект с двумя свойствами - название, цена. 
// В консоли вывести оба значения каждого свойства 

// Массив объектов - структура данных, которая используется во фронтенде чаще всего
// Нужна для хранения коллекции данных
 
// const laptops = [0: {}, 1: {}]
// const laptops = [
//     {
//         mark: "HP",
//         model: "Pavilion 15-eg",
//         price: 51000,
//         cpu: "Intel Core i5",
//         material: ["пластик", "алюминий"]
//     },
//     {
//         mark: "Acer",
//         model: "90NbK",
//         price: 55000,
//         cpu: "Intel Core i7",
//         material: ["аллюминий", "пластик"]
//     },
//     {
//         mark: "Asus",
//         model: "GPT10",
//         price: 30000,
//         cpu: "Intel Core i3",
//         material: ["аллюминий", "пластик"]
//     },
// ]

// Задача. Вывести в консоли марку всех ноутбуков в теге <h1></h1>
// for(let i = 0; i < laptops.length; i++) {
//     console.log(`<h1>${laptops[i].mark}</h1>`)
// }

// Задача. Вывести марки ноутбуков, цена которых больше 35000
// for(let i = 0; i < laptops.length; i++) {
//     if(laptops[i].price > 35000) {
//         console.log(`Марка - ${laptops[i].mark}`)
//     }
// }
// laptops[i] - текущий элемент, каждый элемент массива

// Задача. Вывести общую стоимость всех ноутбуков в цикле из массива laptops. 
// let sum = 0
// for(let i = 0; i < laptops.length; i++) {
//     sum = sum + laptops[i].price // laptops[i] - {price: 50000}, {}, {}
// }
// console.log(sum)

// Задача. Вывести общую стоимость всех ноутбуков в цикле из массива laptops. 
// const prices = [10000, 40000, 60000, 100000, 70000]

// let sum = 0
// for(let i = 0; i < prices.length; i++) {
//     // prices[i] // 10000, 40000
//     sum = sum + prices[i]
// }
// console.log(sum)

// prices.length = 5
// 1. i = 0; 0 < 5 - true; sum = 0 + 10000 = 10000; i++, i = 1
// 2. i = 1; 1 < 5 - true; sum = 10000 + 40000 = 50000; i++, i = 2
// 3. i = 2; 2 < 5 - true; sum = 50000 + 60000 = 110000; i++, i = 3
// 4. i = 3; 3 < 5 - true, sum = 110000 + 100000 = 210000; i++, i = 4
// 5. i = 4; 4 < 5 - true, sum = 210000 + 70000 = 280000; i++, i = 5
// 6. i = 5; 5 < 5 - false, ВЫХОД ИЗ ЦИКЛА

// Вывести марку и цену всех ноутбуков. "Марка - {марка ноутбука}, цена - {цена ноутбука}"
// console.log(laptops[0].mark, laptops[0].price) // название и цена первого ноутбука
// console.log(laptops[1].mark, laptops[1].price) // название и цена второго ноутбука 
// console.log(laptops[2].mark, laptops[2].price) // название и цена третьего ноутбука

// for(let i = 0; i < laptops.length; i++) {
//     console.log(`Марка - ${laptops[i].mark}, цена - ${laptops[i].price}`)
// }
// HP 51000
// Acer 55000
// Asus 30000

// laptops.length = 3
// 1. let i = 0; 0 < 3 - true, console.log(laptops[0].mark, laptops[0].price) - HP, i++, i =1
// 2. i = 1; 1 < 3 - true, console.log(laptops[1].mark, laptops[1].price) - ACER, i++, i = 2
// 3. i = 2; 2 < 3 - true, console.log(laptops[2].mark, laptops[2].price) - ASUS, i++, i = 3
// 4. i = 3; 3 < 3 - false, ВЫХОД ИЗ ЦИКЛА

// array[i] - текущий элемент, каждый элемент массива
// array = [{}, {}, {}]

// В консоли получить строку "Название {название первого ноутбука}, а цена - {цена первого}"
// Название HP, а цена 51000
// console.log(laptops[0].price)
// console.log(laptops[1].material[0])
// console.log(`Название ${laptops[0].mark}, а цена - ${laptops[0].price}`)

// В консоли вывести строку 
// "Модель {модель второго ноутбука} и у него процессор {процессор второго ноутбка}"
// Модель 90NbK и у него процессор - Intel Core i7 
// console.log(`Модель ${laptops[1].model} и у него процессор ${laptops[1].cpu}`)
// console.log(laptops[1].model, laptops[1].cpu)

/*
    Конкатенация - склеивание строк
        "Arsen" + "Iusupov"

    Интерполяция - склеивания строк с помощью знака литерала ``
*/

const products = [
    {
        name: "Iphone 14",
        price: 100000,
        category: "phone"
    },
    {
        name: "Iphone 13",
        price: 90000,
        category: "phone"
    },
    {
        name: "Samsung TV200",
        price: 150000,
        category: "TV"
    },
    {
        name: "Xiaomi T400V",
        price: 140000,
        category: "TV"
    },
    {
        name: "ACER G500",
        price: 60000,
        category: "laptop"
    },
    {
        name: "ASUS G31",
        price: 70000,
        category: "laptop"
    }
]

// 1. Вывести товары, цена которых больше 80000
// for(let i = 0; i < products.length; i++) {
//     if(products[i].price > 80000) {
//         console.log(products[i])
//     }
// }

// 2. Вывести только телевизоры
// for(let i = 0; i < products.length; i++) {
//     if(products[i].category == "TV") {
//         console.log(products[i])
//     }
// }

// Деструктуризация объектов - это синтаксис, который позволяет извлечь значение из объекта
// и поместить в отдельную переменную. 

const user = {
    name: "Arsen",
    login: "Arsen123",
    email: "Arsen@mail.ru"
}
// без деструктуризации 
    // const userName = user.name
    // console.log(userName)

// с деструктуризацией
const {name: userName} = user
console.log(userName)
// user - объект, name - свойство объекта user, userName - переменная
// camelCase - первая буква первого слова маленькая, первая буква второго и последующих слова Большие
// userName, userLogin, colorOfLaptop 

// с деструктуризацией, если переменную хотим назвать так же, как и называется свойство в объекта
const {name} = user
console.log(name)
// появилась отдельная переменная name, которая хранит значение свойства name в объекте user

// Задача. Деструктурировать переменную email из объекта user