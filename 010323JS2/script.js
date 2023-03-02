/*
    ������ - ��� �������� ������� ����� ��������� ��� ������, ��������, �������
    ������ ��� ������� �������������� JS.

    ������ - ��������� ������, � ������� ����� ������� ��������� ��������� - �����, ������, ������ �������
    � ������� ����� ��������� ����� ���� ������. ���������� ��������� ������� �� ����������.
    �������� � ������� ���������� � ��� �������, � ������� �� ��������� � ������.
    ������ ����� �� ������������ ������. ������ - ������������� ���������
    array - ������
    ���� � ������ ���������� � ����, �.� � ������� �������� - ������ 0.
    ������ - �����, ������� ���������� ������� �������� � �������.
*/
/*
    // ������ ������. length - ����� ������, ���-�� ��������� ������
    const arr = []
    console.log(arr)

    // ������ ��� �� JS. length = 4
    const themes = ["����������", "�������", "�������", "�����"]
    console.log(themes)

    // ��������� � ��������� ������� �� �������
    console.log(themes[2])

    // ������. �� ��������������� ������� � ������� ���������� ��������� �������. length = 4
    // ��������� ������� ������ �� 1 ������, ��� ����� ������
    console.log(themes[3])
    console.log(themes[themes.length - 1]) // ������� ��������� ������� �������
    console.log(themes.length) // ������� ����� �������
*/

/*
    // ������ �������.
    // push() - �����, ������� ��������� �������� ������� � ����� �������. � push ����� �������� ������� ������ ���������
    const numbers = [10, 20, 30, 40]
    // ������. �������� 50 � 60 � ����� �������
    numbers.push(50, 60)
    console.log(numbers) // [..., 50, 60]

    // pop() - �����, ������� ������� ������� � ����� �������
    numbers.pop()
    console.log(numbers) // [..., 50]
*/

/*
    // ������. ��������� � ������������ 3 ����� � �������� �� ������
    const number1 = +prompt('������� ������ �����')
    const number2 = +prompt('������� ������ �����')
    const number3 = +prompt('������� ������ �����')

    const numbers = []
    numbers.push(number1, number2, number3)
    console.log(numbers)
*/

/*
    // ������. ������� ������ �� ���� ����� [1, 2, 3], ������� ������ ������ � ��������� ���
    // ���������� ����� �� ������� �������
    const numbers = [1, 2, 3]
    const squares = []
    // ���� �������� ���. � ����� � ������� squares - [1, 4, 9]
    const square1 = numbers[0] * numbers[0] // square1 = 1 * 1 = 1
    const square2 = numbers[1] * numbers[1] // square2 = 2 * 2 = 4
    const square3 = numbers[2] * numbers[2] // square3 = 3 * 3 = 9
    squares.push(square1, square2, square3)

    console.log(squares)

    // squares.push(numbers[0]*numbers[0], numbers[1] * numbers[1], numbers[2] * numbers[2])
*/

/*
    ����� - ������������� ��������

    1. ��������� ����� �� �������?
    2. ���� �����, �� ������ �������� � ������� � �1.
    3. ���� �������, �� ������� ����

    for(�������������; �������; ����������) {
        ���� ����� ��� ��������
    }
    1. ������������� - ��������� �������� �������� �����
    2. ������� - �������, �� �������� ����������� ����. ���� ��� �����, �� �������� �����������
        ���� ��������, �� ���� �������������
    3. ���������� - ���������, ������� ����������� ����� ���������� ���� �����
    i++ - �������������, ���������� i �� 1
*/

// ������� � ������� ����� �� 0 �� 9
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }
// �������� - ���� ��� ���������� �����. ���� �������� �����

// ������. ������� � ������� "Hello" 10 ���
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
// 10. i = 9, 9 < 9 - false, ����� �� �����

// ������. ������� ��� �������� �� �������, ������� ������ 20. ���� ������ ����������� ������� ���, ������� ��������� � �������
// 5 - ����� �������. numbers.length = ���������� ��������� � �������
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
// numbers[i] - ������� �������
// numbers.length = 5
// 1. i = 0, i < numbers.length; 0 < 5 - true; if(numbers[0] > 20) - false -> console.log(numbers[0]); i++, i = 1
// 2. i = 1, 1 < 5 - true, console.log(numbers[1]); i++, i = 2
// 3. i = 2, 2 < 5 - true, console.log(numbers[2]); i++, i = 3
// 4. i = 3, 3 < 5 - true, console.log(numbers[3]); i++, i = 4
// 5. i = 4, 4 < 5 - true, console.log(numbers[4]); i++, i = 5
// 6. i = 5, 5 < 5 - false, ������ �� �����

// ��� ������, ��� ����� ������ ��� ��������
// % - mod - ������� �� �������
// ����� ����� % 2, ���� ������, �� ������� �� ������� �� 2 = 0; ���� ��������, �� ������� = 1

// 10 % 2 = 5, 0 - ������
// 11 % 2 = 5, 1 - ��������

// 10 % 2, 0 - false.
// 41 % 2, 1  - true.
// numbers[i] % 2 = 1 - true
// numbers[i] % 2 == 0 -

// ������. ���� ������ �� �����, ����� ������� ������ �������� ����� �� �������
// const numbers = [5, 10, 12, 41, 56, 99, 101] // 5, 41, 99, 101

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 == 1) {
//         console.log(numbers[i])
//     }
// }

// 5 % 2 = 1;  1 == 1 - true; console.log(5)
// 10 % 2 = 0; 0 == 1 - false;

// ���� ������. [1, 3, 5, 9, 10]. ���� ������ ������ [].
// ����� � ����� ��������� ������ ������ ���������� �� ������� �������.
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
// 6. i = 5; 5 < 5 - false, ����� �� �����

// ������� ����, ������� ���������� �� ������� ������� � ��������� ������ ���������� �� �������.

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


