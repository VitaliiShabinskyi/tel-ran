/* 1. Напишите цикл for, который выводит консоль каждое второе число от 0 до 10 */
console.log('***** ОТВЕТ №1 *****');

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

/* 2. Напишите цикл for, который выводит в консоль  все числа от 55 до 20 */
console.log('***** ОТВЕТ №2 *****');

for (let i = 55; i >= 20; i--) {
    console.log(i);
}

/* 3. Дан массив numbers. Вывести в консоль все числа из массива */
console.log('***** ОТВЕТ №3 *****');

const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/* 4. Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат */
console.log('***** ОТВЕТ №4 *****');

const numbers_squared = [];
for (i = 0; i < numbers.length; i++) {
    numbers_squared[i] = numbers[i] * numbers[i];
    console.log(numbers_squared[i]);
}

/* 5. Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу) */
console.log('***** ОТВЕТ №5 *****');

const last_elem = numbers_squared[numbers_squared.length - 1];
console.log(last_elem);

/* 6. Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’ */
console.log('***** ОТВЕТ №6 *****');

const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
}

console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`);
