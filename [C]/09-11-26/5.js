// Тест на теорию
// 1) var, let и const - разница между ними заключается в следующем:
//      1. var - неизменяемая, но в отличие от других с другими характеристиками зоны видимости
//      2. let - изменяемая переменная
//      3. const = неизменяемые переменные
// 2) == и === отличиаются тем, что === проверяет тип элементы, а == нет. То есть, если мы напишем console.log('5' == 5) выведет true
// а вот console.log('5' === 5) - false
// 3) не могу дать ответ
// 4) map() - метод массива, который возвращает новый массив с измененными элементами по заданному условию в коллбэк функции, а по длине равен исходному
// filter() - метод массива, который возвращает новый массив с отфильтрованными элементами по заданному условию в колбэк функции, а по длине будет меньше или равен
// forEach() - метод массива, который замещает обычные цикл for (условно). позволяет пройтись по всем элементами массива
// 5) аккумулятор в reduce() - переменная, куда будут сохраняться промежуточные и конечное значения. начальное значение играет важную роль, посколько это напрямую влияет на получаемые значения
// так, на примере фунцкии суммирования: при начальном значении acc = 0 и с массивом [1, 2, 3] acc будет принимать занчения 0 + 1 = 1 --> 1 + 2 = 3 --> 3 + 3 = 6. при условном acc = 1 значение было бы равно 7
// 6) callback функция - это такая функция, которая передается в другую функцию. примеров куса, те же самые методы массивов map(), filter(), reduce() и тд. 
// к примеру, нам нужно просуммировать элементв массива --> воспользуемся reduce() --> reduce((acc, item) => acc + item) --> acc + item это то, что вернет наша callback функция
// 7) синхронное исполнение кода - это исполнение кода сверху-вниз (код прочитан - код исполняется), а асинхронное исполнение - это исполнение кода только после исполнения чего-либо
// так, например setTimeout() --> мы задаем какой-то промежуток времени мс, после которого исполнится код
// 8) setTimeout(callback, 0) отработает позже обычного callback(), так как в первои случае мы уже передали эту функцию туда, где происходит асинхронное исполнение кода. 
// 9) JSON.stringify() преобразовывает переданное значение в JSON-строку, а JSON.parse() - обратно в JAvaScript элемент (массив. объект, число и тд). Они
// нужны для работы с localStorage потому, что для созранения данных в локальное хранилище нам нужно переводить данные в JSON-формат, потому что только такие данные там хранятся
// а когда мы достаем оттуда данные, то нам нужно получить уже привычные нам данные через parse для работы с ними 
// 10) DOM - это структура, позволяющая управлять HTML элементами ; querySelector - вернет первый попавшийся элемент с заданным css-селектором, в противном случае вернет null, а
// querySelectorAll - вернет массив со всеми элементами с заданным css-селектором, в противном случае вернет NodeList


// 1

// Первый console.log() выведет массив [2, 6, 10]
// Второй выведет исходный массив [1, 2, 3, 4, 5], посколько методы filter() и map() не изменяют исходный массив

// 2 

// Так как мы хотим получить новй список, состоящий их совершеннолетних пользователей, нам следует применять метод filter(), а не map(),
// поскольку данный метод будет возвращать список длиной исходному, а следовательно, user младше 18 лет будет висет в массиве как undefiend. 

const people = [
    { name: 'Andrew', age: 22},
    { name: 'Vlad', age: 21},
    { name: 'Egor', age: 18}
];

const adults = people.filter(man => man.age >= 18);

console.log(adults);

// 3

function calculateTotal(numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
}

console.log(calculateTotal([1, 2, 3]));
console.log(calculateTotal([]));
console.log(calculateTotal([3]));

// 4

const products = [
    {name: 'Phone', price: 500 },   
    {name: 'Laptop', price: 1200 },   
    {name: 'Mouse', price: 30 },   
    {name: 'PKeyboard', price: 80 }   
];

const arrayWithoutCheep = products.filter(good => good.price > 100).map(good => good.name);

console.log(arrayWithoutCheep);

// 5

function applyToEach(array, callback) {
    const result = [];

    array.forEach(item => {
        const callbackResult = callback(item);
        result.push(callbackResult);
    });

    return result;
}

console.log(applyToEach([1, 2, 3], num => num + 10));

// 6

// A D B C 
// запись для C я вижу впервые, не знаю как она должна работать

// 7

// Перекрасить цвет текста через css-селекторы

// function repaintBlue() {
//     document.querySelectorAll('.product')
//         .forEach(item => item.classList.add('blue'));
// }

// Перекрасить цвет текста непосредственно через JS

function repaintBlue() {
    document.querySelectorAll('.product')
        .forEach(item => item.style.color = 'blue');
}

repaintBlue();

// 8 
const tasks = [
    { name: 'Learn JS', complited: true },
    { name: 'Learn CSS', complited: false },
    { name: 'Learn HTML', complited: true }
];

function renderTasks() {
    let html = '';

    tasks.forEach(item => {
        html += `<li>${item.name}</li>`;
    })

    document.querySelector('.tasks').innerHTML = html;
}

document.querySelector('.show__tasks')
    .addEventListener('click', renderTasks);

// 9 

const todos = JSON.parse(localStorage.getItem('todos')) || [];

function addTodo(name) {
    todos.push({ name });

    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeTodo(index) {
    if (!Number.isInteger(index) || index < 0 || index >= todos.length) {
        return;
    }

    todos.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(todos));
}

// addTodo('1')
// addTodo('2')
// console.log(todos)
// removeTodo(1);

// 10

const users = JSON.parse(localStorage.getItem('users')) || [];

renderArray()

function addUsers() {
    let inputNames = document.querySelector('.name__input')
    const inputValue = inputNames.value.trim();

    if (inputValue.length > 0) {
        users.push(inputValue)
    }
    renderArray();

    inputNames.value = '';

    localStorage.setItem('users', JSON.stringify(users));
}

function renderArray() {
    const usersList = document.querySelector('.users__list');

    usersList.textContent = '';

    users.forEach(todo => {
        const li = document.createElement('li');

        li.textContent = todo;

        usersList.append(li);
    })
}

document.querySelector('.add__btn')
    .addEventListener('click', addUsers);



