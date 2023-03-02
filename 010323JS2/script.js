/*
    Методы - это действия которые можно выполнить над числом, строками, массива
    Методы уже созданы разработчиками JS.

    Массив - структура данных, в которой можно хранить несколько элементов - числа, строки, другие массивы
    В массиве могут храниться любые типы данных. Количество элементов массива не ограничено.
    Элементы в массиве нумеруются в том порядке, в котором их поместили в массив.
    Массив похож на нумерованный список. Массив - упорядоченная коллекция
    array - массив
    счет в массив начинается с нуля, т.е у первого элемента - индекс 0.
    индекс - число, которое обозначает порядок элемента в массиве.
*/
/*
    // Пустой массив. length - длина массив, кол-во элементов внутри
    const arr = []
    console.log(arr)

    // Массив тем по JS. length = 4
    const themes = ["Переменные", "Условия", "Массивы", "Циклы"]
    console.log(themes)

    // Обращение к элементам массива по индексу
    console.log(themes[2])

    // Задача. Из представленного массива в консоли отобразить последний элемент. length = 4
    // Последний элемент всегда на 1 меньше, чем длина массив
    console.log(themes[3])
    console.log(themes[themes.length - 1]) // выводим последний элемент массива
    console.log(themes.length) // выводим длину массива
*/

/*
    // Методы массива.
    // push() - метод, который позволяет добавить элемент в конец массива. В push можно записать сколько угодно элементов
    const numbers = [10, 20, 30, 40]
    // Задача. Добавить 50 и 60 в конец массива
    numbers.push(50, 60)
    console.log(numbers) // [..., 50, 60]

    // pop() - метод, который удаляет элемент с конца массива
    numbers.pop()
    console.log(numbers) // [..., 50]
*/

/*
    // Задача. Запросить у пользователя 3 числа и добавить их массив
    const number1 = +prompt('Введите первое число')
    const number2 = +prompt('Введите второе число')
    const number3 = +prompt('Введите третье число')

    const numbers = []
    numbers.push(number1, number2, number3)
    console.log(numbers)
*/

/*
    // Задача. Создать массив из трех чисел [1, 2, 3], создать пустой массив и заполнить его
    // квадратами чисел из первого массива
    const numbers = [1, 2, 3]
    const squares = []
    // Ниже написать код. В итоге в массиве squares - [1, 4, 9]
    const square1 = numbers[0] * numbers[0] // square1 = 1 * 1 = 1
    const square2 = numbers[1] * numbers[1] // square2 = 2 * 2 = 4
    const square3 = numbers[2] * numbers[2] // square3 = 3 * 3 = 9
    squares.push(square1, square2, square3)

    console.log(squares)

    // squares.push(numbers[0]*numbers[0], numbers[1] * numbers[1], numbers[2] * numbers[2])
*/

/*
    Циклы - повторяющиеся действия

    1. Проверяем верно ли условие?
    2. Если верно, то сделай действие и вернись в п1.
    3. Если неверно, то заверши цикл

    for(инициализация; условие; завершение) {
        тело цикла или действие
    }
    1. инициализация - начальное значение счетчика цикла
    2. условие - условие, по которому выполняется цикл. Если оно верно, то действие выполняется
        если неверное, то цикл заканчивается
    3. завершение - выражение, которое исполняется после выполнения тела цикла
    i++ - инкрементация, увеличение i на 1
*/

// Вывести в консоли числа от 0 до 9
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }
// итерация - один шаг выполнения цикла. одна операция цикла

// Задача. Вывести в консоль "Hello" 10 раз
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")

// for(let i = 0; i < 10; i++) {
//     console.log('hello')
// }


// 1. i = 0, i < 9, 0 < 9 - true, console.log(i); console.log(0), i++; i = 1
// 2. i = 1, 1 < 9 - true, console.log(1); i++; i = 2
// 3. i = 2, 2 < 9 - true, console.log(2); i++; i = 3
// 4. i = 3, 3 < 9 - true, console.log(3); i++; i = 4
// 5. i = 4, 4 < 9 - true, console.log(4); i++; i = 5
// 6. i = 5, 5 < 9 - true, console.log(5); i++; i = 6
// 7. i = 6, 6 < 9 - true, console.log(6); i++; i = 7
// 8. i = 7, 7 < 9 - true, console.log(7); i++; i = 8
// 9. i = 8, 8 < 9 - true, console.log(8); i++; i = 9
// 10. i = 9, 9 < 9 - false, ВЫХОД ИЗ ЦИКЛА

// Задача. Вывести все элементы из массива, которые больше 20. Цикл должен выполняться столько раз, сколько элементов в массиве
// 5 - длина массива. numbers.length = количество элементов в массиве
// const numbers = [10, 20, 30, 40, 50]
// console.log(numbers[0]) // 10
// console.log(numbers[1]) // 20
// console.log(numbers[2]) // 30
// console.log(numbers[3]) // 40
// console.log(numbers[4]) // 50

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 20) {
//         console.log(numbers[i])
//     }
// }
// numbers[i] - текущий элемент
// numbers.length = 5
// 1. i = 0, i < numbers.length; 0 < 5 - true; if(numbers[0] > 20) - false -> console.log(numbers[0]); i++, i = 1
// 2. i = 1, 1 < 5 - true, console.log(numbers[1]); i++, i = 2
// 3. i = 2, 2 < 5 - true, console.log(numbers[2]); i++, i = 3
// 4. i = 3, 3 < 5 - true, console.log(numbers[3]); i++, i = 4
// 5. i = 4, 4 < 5 - true, console.log(numbers[4]); i++, i = 5
// 6. i = 5, 5 < 5 - false, выхожу из цикла

// Как понять, что число четное или нечетное
// % - mod - остаток от деления
// Любое число % 2, Если четное, то остаток от деления на 2 = 0; Если нечетное, то остаток = 1

// 10 % 2 = 5, 0 - четное
// 11 % 2 = 5, 1 - нечетное

// 10 % 2, 0 - false.
// 41 % 2, 1  - true.
// numbers[i] % 2 = 1 - true
// numbers[i] % 2 == 0 -

// Задача. Есть массив из чисел, нужно вывести только нечетные числа из массива
// const numbers = [5, 10, 12, 41, 56, 99, 101] // 5, 41, 99, 101

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 == 1) {
//         console.log(numbers[i])
//     }
// }

// 5 % 2 = 1;  1 == 1 - true; console.log(5)
// 10 % 2 = 0; 0 == 1 - false;

// Есть массив. [1, 3, 5, 9, 10]. Есть пустой массив [].
// Нужно в цикле заполнить пустой массив квадратами из первого массива.
const numbers = [1, 3, 5, 9, 10]
const squares = []

for(let i = 0; i < numbers.length; i++) {
    squares.push(numbers[i] * numbers[i])
}
console.log(squares)

// 1. i = 0; 0 < 5 - true; squares.push(1 * 1); squares = [1]; i++
// 2. i = 1; 1 < 5 - true, sqares.push(3 * 3); squares = [1, 9]; i++
// 3. i = 2; 2 < 5 - true, squares.push(5 * 5); sqaures = [1, 9, 25]; i++
// 4. i = 3; 3 < 5 - true, squares.push(9 * 9); squares = [1, 9, 25, 81]; i++
// 5. i = 4; 4 < 5 - true, squares.push(10 * 10); squares = [1, 9, 25, 81, 100]; i++
// 6. i = 5; 5 < 5 - false, ВЫХОД ИЗ ЦИКЛА

// Создать цикл, который проходится по первому массиву и заполняет массив квадратами из первого.

// 1.const square = numbers[i]*numbers[i]
// push(numbers[i]*numbers[i])

/*
    1.const square1 = numbers[0]*numbers[0]
    squares.push(square1)

    2.const square2 = numbers[1]*numbers[1]
    squares.push(square2)

    3. const square3 = numbers[2]*numbers[2]
    squares.push(square3)
*/


