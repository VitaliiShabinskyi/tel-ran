// Решить следующие задачи:
// 1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

function task_1(a, b) {
    return Math.min(a, b);
}
  
console.log('***** Задание 1. *****\r\n' + task_1(12, 5));
  
// 2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

function task_2(c, d) {
    console.log('***** Задание 2 *****');
    let min = Math.min(c, d);
    let max = Math.max(c, d);

    for (let i = max; i >= min; i--) {
        if (i % 2 == 0) console.log(i);
    }
}

task_2(1, 7);

// 3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power(e, f=2) {
    return Math.pow(e, f);
}

console.log('***** Задание 3. *****\r\n' + power(3));

// 4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function task_4(n) {
    let sum_4 = 0;
    for(let i = 1; i <= n; i++) {
        sum_4 += i;
    }
    return sum_4;
}

console.log('***** Задание 4. *****\r\n' + task_4(9));

// 5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function task_5(n, m) {
    let sumEven = 0;
    let sumOdd = 0;

    if( n > m ) {
        for(let i = n; i >= m; i--) {
            i % 2 === 0 ? sumEven += i : sumOdd += i;
        }
    } else {
        for(let i = n; i <= m; i++) {
            i % 2 === 0 ? sumEven += i : sumOdd += i;
        }
    }

    console.log(`***** Задание 5. *****\r\nЧетные: ${sumEven}\r\nНечетные: ${sumOdd}`);
    
}

task_5(1,-9);

// 6. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.  
// Пример: [ 'one', 'two', 'three' ] => 'three'

function task_6(arr = []) {
    if (arr.length === 0) {
        return null;
    }

    let max_i = 0;
    for(let i = 1; i < arr.length; i++) {
        if (arr[i].length > arr[max_i].length) max_i = i;
    }
    return arr[max_i];
}

console.log('***** Задание 6. *****\r\n' + task_6([ 'one', 'two', 'three' ]));