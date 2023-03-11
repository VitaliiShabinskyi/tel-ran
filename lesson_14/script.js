// 1. Вывести в консоль все числа в диапазоне от 0 до 20

// for(let i = 0; i <= 20; i++){
//   console.log(i)
// }


// 2. Вывести в консоль каждое третье число в диапазоне от 10 до 50

// for (let i = 10; i <= 50; i += 3){
//   console.log(i)
// }


// 3. Вывести в консоль каждое третье число в диапазоне от 50 до 10

// for(let i = 50; i >= 10; i -= 3){
//   console.log(i)
// }


// 4. Написать функцию, которая принимает в качестве аргументов два числа и выводит в консоль все числа от меньшего к большему

function showNumbers(a, b){
  const minNum = Math.min(a, b);
  const maxNum = Math.max(a, b);

  for(let i = minNum; i <= maxNum; i++){
    console.log(i)
  }
}

function showNumbers1(a, b){
  let minNum, maxNum;
  if (a < b){
    minNum = a;
    maxNum = b
  } else {
    minNum = b;
    maxNum = a
  }

  for(let i = minNum; i <= maxNum; i++){
    console.log(i)
  }
}

// const res = showNumbers(20, 30);
// console.log(res);

// 5. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 

function getNumsArray(a, b) {
  const minNum = Math.min(a, b);
  const maxNum = Math.max(a, b);
  const numbers = [];

  for(let i = minNum; i <= maxNum; i++){
    numbers.push(i)
  }

  return numbers
}

const numsArray = getNumsArray(50, 30);
// console.log(numsArray);


// 6. В программе объявлена переменная list, которая содержит массив чисел. Используя цикл, посчитайте сумму чисел, запишите эту сумму в переменную array_sum и выведите в консоль переменную array_sum 

const list = [3, 6, 1, 97, 4];

let array_sum = 0;
for(let i = 0; i < list.length; i++){
  // array_sum = array_sum + list[i]
  array_sum += list[i]
}

// console.log(array_sum);

// i = i + 3
// i += 3

// i = i * 3
// i *= 3

// array_sum = array_sum + list[i]
// array_sum += list[i]


// 7. В программе объявлена переменная list, которая содержит массив чисел. Используя цикл, посчитайте произведение чисел, запишите это произведение в переменную array_mult и выведите в консоль переменную array_mult 

let array_mult = 1;
for(let i = 0; i < list.length; i++){
  array_mult *= list[i]
}

// console.log(array_mult);


// 8. В программе объявлена переменная new_list, представляющая массив положительных и отрицательных числовых значений. Используя цикл, выведите в консоль сумму положительных чисел.

const new_list = [-1, 9, 10, 7, 54, -6, -3, 15];

let new_list_sum = 0;
for(let i = 0; i < new_list.length; i++){
  if(new_list[i] > 0){
    new_list_sum += new_list[i]
  }
}

// console.log(new_list_sum);


// 9. В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.

let list_even = 0; // четные
let list_odd = 0; // нечетные

for (let i = 0; i < list.length; i++){
  if(list[i] % 2 === 0){
    list_even += list[i]
  } else {
    list_odd += list[i]
  }
}

const result = list_even - list_odd;
// console.log(result);


// 10. В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.

const word = 'hello'; // => 'olleh'
let reversed_word = '';

for(let i = word.length - 1; i >= 0; i--){
  reversed_word += word[i]
  // '' + 'o' + 'l' + 'l' + 'e' + 'h' => 'olleh'
}

// console.log(reversed_word);


// 11. Напишите функцию, которая в качестве аргумента получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.

function isPalindrome(str){
  let reversed_str = '';

  for(let i = str.length - 1; i >= 0; i--){
    reversed_str += str[i]
  }

  return str === reversed_str
}

const checked = isPalindrome('доход');
// console.log(checked);


// 12. Используя цикл, выведите в консоль сумму чисел из диапазона значений от 1 до 54 кратных 5.

let sum = 0;
for(let i = 1; i <= 54; i++){
  if(i % 5 === 0){
    sum += i
  }
}

// console.log(sum);

// 13. Дан массив с объектами. Написать цикл, который выводит в консоль только названия товаров

const products = [
  {
    id: 1,
    title: 'bicycle',
    price: 45000,
    discount: 10
  },
  {
    id: 2,
    title: 'roller-skates',
    price: 15000,
    discount: 5
  },
  {
    id: 3,
    title: 'Kick scooter',
    price: 10000,
    discount: 30
  },
  {
    id: 4,
    title: 'skis',
    price: 25000,
    discount: 20
  },
  {
    id: 5,
    title: 'skate',
    price: 10000,
    discount: 0
  }
];

for(let i = 0; i < products.length; i++){
  console.log(products[i].title)
}

// ДЗ
// Решить следующие задачи:
// 1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// 2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
// 3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
// 4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
// 5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
// 6. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'

