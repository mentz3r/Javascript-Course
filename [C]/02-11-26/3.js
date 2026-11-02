// 1

function formatName(name) {
    const validNameValue = name.trim();
    return validNameValue === '' ? 'Гость' : `${validNameValue}`;
}

console.log(formatName('  Арсений  '));
console.log(formatName('  '));
console.log(formatName('Аня'));

// 2

function getSettings(settings) {
    let newObject = {};

    return newObject = {volume: settings.volume ?? 50, username: settings.username ?? 'Гость'};
}
console.log(getSettings({volume: 0, username: ''}));
console.log(getSettings({volume: 10, username: undefined}));
console.log(getSettings({volume: 30, username: 'Аня'}));
console.log(getSettings({volume: null, username: 'Аня'}));

// 3

function withStatus(user, status) {
    return {...user, status: status};
}

const user = {
    name: 'Аня',
    age: 20,
    status: 'online'
};

const result = withStatus(user, 'offline');

console.log(user);
console.log(result);

// 4

function countLongWords(words, minLength) {
    const result = words.filter(word => {
        return word.length >= minLength 
    });

    return result.length;
}

console.log(countLongWords(['cat', 'elephant', 'dog'], 4));
console.log(countLongWords(['hello', 'world'], 3));
console.log(countLongWords([], 5));

// 5

const users = [
    { name: 'Аня', age: 20, active: true },
    { name: 'Борис', age: 17, active: true },
    { name: 'Вера', age: 25, active: false },
    { name: 'Дима', age: 22, active: true }
];

function getActiveAdults(users) {
    const result = users.filter(user => {
        return user.age >= 18 && user.active
    }).map(user => {
        return user.name
    });

    return result;
}

console.log(getActiveAdults(users));

// 6

const products = [
    { id: 'a', name: 'Телефон' },
    { id: 'b', name: 'Ноутбук' }
];

function findProductById(products, id) {
    const result = products.find(item => {
        return item.id === id;
    });

    return result;
}

console.log(findProductById(products, 'b'));
console.log(findProductById(products, 'z'));

// 7

const cart = [
    { name: 'Phone', price: 500, quantity: 2 },
    { name: 'Laptop', price: 1000, quantity: 1 },
    { name: 'Mouse', price: 50, quantity: 3 }
];

function calculateCartTotal(cart) {
    const cartTotal = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    return cartTotal;
}

console.log(calculateCartTotal(cart));

// 8

function sortNumbers(numbers) {
    const numbersCopy = numbers.slice();

    numbersCopy.sort((a, b) => a - b);

    return numbersCopy;
}

const numb = [10, 2, 100, 1];
console.log(sortNumbers(numb));
console.log(numb);

// 9

const letters = ['a', 'b', 'c'];

function removeAt(list, index) {
    return list.splice(index, 1);
}

const removed = removeAt(letters, 1);

console.log(removed);
console.log(letters);

// 10

const names = JSON.parse(localStorage.getItem('names')) || [];

function addNames() {
    let inputName = document.querySelector('.name-input');
    let inputNameValue = inputName.value.trim();

    if (inputNameValue) {
        names.push(inputNameValue);
    }

    inputName.value = '';

    localStorage.setItem('names', JSON.stringify(names));

    console.log(names);
}

document.querySelector('.add-btn')
    .addEventListener('click', addNames);
