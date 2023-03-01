// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
let num = prompt('10% от числа.\r\nВведите число');
let result = num * 0.1;
console.log(result);
document.getElementById("answer1").innerHTML = "10% от числа " + num + " равно " + result;

// Написать программу, которая получает два числа и выводит наименьшее
let num1 = prompt('Поиск наименьшего.\r\nВведите первое число');
let num2 = prompt('Поиск наименьшего.\r\nВведите второе число');

if (num1 < num2) {
    console.log('Первое число наименьшее: ' + num1);
    document.getElementById("answer2").innerHTML = 'Первое число наименьшее: ' + num1 + ' < ' + num2;

} else if (num1 == num2) {
    console.log('Числа равны.');
    document.getElementById("answer2").innerHTML = 'Числа равны.'
} else {
    console.log('Второе число наименьшее: ' + num2);
    document.getElementById("answer2").innerHTML = 'Второе число наименьшее: ' + num2 + ' < ' + num1;
}
 
// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
let num100 = prompt("Сравнение с числом 100.\r\nВведите число");
if (num100 < 100) {
  console.log("Число " + num100 + " меньше 100");
  document.getElementById("answer3").innerHTML = "Число " + num100 + " меньше 100";
} else if (num100 > 100) {
  console.log("Число " + num100 + " больше 100");
  document.getElementById("answer3").innerHTML = "Число " + num100 + " больше 100";
} else {
  console.log("Число " + num100 + " равно 100");
  document.getElementById("answer3").innerHTML = "Введенное число равно " + num100;
}

// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.
let uName = prompt('Enter your name');
let uOld = prompt('Enter your age');
if (uOld < 18) {
    console.log(`Hi, ${uName}!`);
    document.getElementById("answer4").innerHTML = `Hi, ${uName}!`;
} else {
    console.log(`Hello, ${uName}!`);
    document.getElementById("answer4").innerHTML = `Hello, ${uName}!`;
}