// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

let numbersHtml = '';

for (let i = 100; i >= 50; i -= 10 ) {
    numbersHtml += `<p>${i}</p>`;
}
document.querySelector('.numbers').innerHTML = numbersHtml;

// 2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

let strings = ["string1", "string2", "string3", "string4"];

for (let x = 0; x < strings.length; x++ ) {
    document.querySelector('.strings_container').innerHTML += `<p>${strings[x]}</p>`;
}

// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

let users = [
  {first_name: 'John', last_name: 'Smith', age: 25},
  {first_name: 'Jane', last_name: 'Doe', age: 16},
  {first_name: 'Alex', last_name: 'Johnson', age: 18},
  {first_name: 'Bob', last_name: 'Brown', age: 30}
];

for (let u = 0; u < users.length; u++) {
    if (users[u].age > 17) {
        document.querySelector('.users_container').innerHTML += `<h3><strong>Фамилия: </strong>${users[u].last_name}</h3><p><strong>Имя: </strong>${users[u].first_name}</p><p><strong>Возраст: </strong>${users[u].age}</p><hr>`;
    }
}

/*
let usersContainer = document.querySelector('.users_container');
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    let userCard = document.createElement('div');
    userCard.classList.add('user-card');

    let userName = document.createElement('p');
    userName.innerHTML = `${users[i].first_name} ${users[i].last_name}`;

    let userAge = document.createElement('p');
    userAge.innerHTML = `Age ${users[i].age}`;

    userCard.appendChild(userName);
    userCard.appendChild(userAge);

    usersContainer.appendChild(userCard);  												   
  }   
}
*/