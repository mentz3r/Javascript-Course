// Тест на теорию 
// 1) Первый console.log() выведет 'Default', а второй выведет ''. Это происходит потому, что оператор ?? принимает 0 и ''  за true-значения
// 2) В конечном счете вылезет undefiend. Во-первых, a и b существуют только в момент исполнения if () {}, как только мы выходим из этого условия - заданные там переменные перестают существовать. Следовательно, выводить console.log() будет ничего, а следовательно, функия ничего не вернет --> undefiend
// 3) Здесь будут существовать два разных объекта, так как мы воспользовались записью {...obj}, что позволяет нам не пережимать о ссылочным обращении, если можно так выразиться. Могу предположить, что второе свойство меняется потому, что settings у нас также является объектом, из-за чего ссылки здесь имеют место быть.
// 4) Первые два console.log() выведут один и тот же массив, так как sort() изменяет исходный массив. А третий console.log() выдаст true, поскольку в массивах мы должны учитывать ссылочное обращение, с которым мы сталкиваемся в const result = numbers.sort()
// 5) выведет [9, 12, 15]. Всего элементов 3
// 6) разница между find() и filter() выражается тем, что find() вернет первопопавшеемя значение, подходящте под условие, заданное в функии, а вот filter() вернет массив? отфильтрованный по заданному в функии условию. find() --> undefiend, а filter() --> пустой массив
// 7) Начальное значение аккумулятора === 1; 3; Аккумулятор на каждый итерации будет в number раз больше, чем на предедыщей итерации
// 8) Честно, не знаю
// 9) Честно, не знаю
// 10) Порядок следующий: 1 3 2. Так происходит потому, что callback ставится в очередь выполнения задач и может быть выполненым только после завершения синхронного кода.
// 11) В первом случае мы получим конкретный (в случае, если он не один, то получим первопапавшийся) html-элемент, с указанным классом, а во втором - массив всех элементов с указанным классом. Если подходящих элементов не будет, то первый вернет - null, а второй - пустой массив.
// 12) Первых console.log выведет наш объект в формате json, однако без свойства age. Это происходит потому, что для JSON нет такой вещи как undefiend (честно, не знаю). А второй console.log() выведет string.

function test() {
    if (true) {
        var a = 10;
        let b = 20;
    }

    console.log(a);
    console.log(b);
}

test();

// 1

const array1 = [' JavaScript ', ' HTML', '', ' CSS ', '   '];

function normalizeTags(tags) {
    return tags.filter(element => {
        return element.trim().length !== 0;
    }).map(element => {
        return element.trim().toLowerCase();
    });
}

console.log(normalizeTags(array1));
console.log(array1);

// 2

const products = [
    { name: 'Phone', price: 500, inStock: true },
    { name: 'Laptop', price: 1200, inStock: false },
    { name: 'Mouse', price: 50, inStock: true },
    { name: 'Keyboard', price: 100, inStock: true }
];

function getAvaibleProducts(products) {
    return products.filter(good => good.inStock).map(good => good.name);
}

console.log(getAvaibleProducts(products));

// 3

const users1 = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'John' }
];

function findUserById(users, id) {
    return users.find(user => user.id === id);
}

console.log(findUserById(users1, 2));
console.log(findUserById(users1, 10));

// 4

const array2 = [10, 20, 30, 40];
const emptyArray = [];

function calculateAverage(numbers) {
    return numbers.length > 0 ? numbers.reduce((acc, num) => {
        return acc + num
    }, 0) / numbers.length : 0;
}

console.log(array2);
console.log(calculateAverage(array2));
console.log(emptyArray);
console.log(calculateAverage(emptyArray));

// 5

const students = [
    { name: 'Alex', score: 85 },
    { name: 'Anna', score: 95 },
    { name: 'John', score: 70 },
    { name: 'Maria', score: 90 }
];

function sortStudents(students) {
    let studentsCopy = students.slice();

    return studentsCopy.sort((a, b) => b.score - a.score);
}

console.log(students);
console.log(sortStudents(students));

// 6

const users2 = [
    { id: 1, name: 'Alex', age: 20 },
    { id: 2, name: 'Anna', age: 22 }
];

// Моя реализация

function updateUser(users, id, changes) {
    const newDataUsers = [];

    users.forEach(element => {
        newDataUsers.push({...element});
    });
    
    return newDataUsers.map(user => {
        if (user.id === id) {
            Object.keys(changes).forEach(key => {
                return user[key] = changes[key];
            });
        }

        return user;
    });
}

// Реализация нейронки

// function updateUser(users, id, changes) {
//     return users.map(user => {
//         if (user.id === id) {
//             return { ...user, ...changes };
//         }

//         return user;
//     });
// }

console.log(users2);
console.log(updateUser(users2, 1 , { age: 25, city: 'Paris'}));

// 7

function makePrefixer(prefix) {
    return function(param) {
        return `${prefix}${param}`;
    };
}

const addHello = makePrefixer('Hello, ');
const addMr = makePrefixer('Mr. ');

console.log(addHello('Alex'));

console.log(addMr('Smith'));

// 8

function applyToEach(numbers, callback) {
    return numbers.map(callback);
}

console.log(applyToEach([1, 2, 3], number => number * 2));

console.log(applyToEach([1, 2, 3], number => number + 10));

// 9

function runAfterDelay(callback, delay) {
    setTimeout(callback, delay);
}

runAfterDelay(() => {
    console.log('Готово!');
}, 2000);

// 10

let names = JSON.parse(localStorage.getItem('names')) || [];

renderNames();

function addNames() {
    let inputElement = document.querySelector('.name-input');
    const inputElementValue = inputElement.value.trim();

    if (inputElementValue.length > 0) {
        names.push(inputElementValue);
    }
    console.log(names);
    renderNames();

    inputElement.value = '';

    localStorage.setItem('names', JSON.stringify(names));
}

function renderNames() {
    // Моя реализация через innerHTML
    let html = ``;

    names.forEach(name => {
        html += `<li>${name}</li>`
    })

    document.querySelector('.name-list').innerHTML = html;

    // Реализация нейронки через textContent
    // const nameList = document.querySelector('.name-list');

    // nameList.textContent = '';

    // names.forEach(name => {
    //     const li = document.createElement('li');

    //     li.textContent = name;

    //     nameList.append(li);
    // });
}

document.querySelector('.add-btn')
    .addEventListener('click', addNames);

