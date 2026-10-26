// ТЕСТ НА ТЕОРИЮ 
//  1) 'Борис' 
//  2) [] 
//  3) 10 0 (?? реагирует только на null & undefiend)
//  4) ReferenceError и ReferenceError (ошибка: querySelector вернет null, а у null нет свойства textContent, так что должен быть ответ ReferenceError и TypeError)
//  5) 4 
//  6) 5
//  7) ['a', 'd']
//  8) [] ( localStorage.getItem('todos') --> null; JSON.parse(null) --> null; null || [] --> []
//  9) ReferenceError (знал, что код не сработает и будет ошибка, но не знал какая именно она будет) 
//  10) 5, а затем undefined //

// 1

function getLable(temp) {
    if (temp < 10) { console.log('Холодно'); }
    else if (temp >= 10 && temp < 25) { console.log('Тепло'); }
    else if (temp >= 25) { console.log('Жарко'); }
    else if (!Number(temp)) { console.log('Нет данных'); }
}

getLable(5);
getLable(10);
getLable(25);
getLable();
getLable('abc');

// 2

const settings = {
    volume: 0,
    name: ''
};

console.log(settings.volume ?? 50, settings.title || 'Без названия');
// Если бы в первой части мы бы использовали ||, то вывело бы запасное значение 50, т.к. 0 для оператора || является также ложным значением. Используем ??

// 3

function formatPrice(cents) {
    return `$${(cents / 100).toFixed(2)}`;
}

console.log(formatPrice(1250));
console.log(formatPrice(5));

// 4

// Ошибка будет ReferenceError, так как message существует только в моменте вызовы функции, потому что мы его не возвращаем.

function greeting() {
    return 'Привет'
}

const message = greeting();
console.log(message);

// 5

const user = {
    name: 'Аня',
    age: 20
};

function renameInPlace(user, newName) {
    return user.name = newName;
}

function renamed(user, newName) {
    return user = { name: newName, age: user.age };
}

// renameInPlace(user, 'Соня');
// console.log(user);
// Вывод: {'Соня', 20} --- Работает корректно

// renamed(user, 'Катя');
// console.log(user);
// Вывод: {'Аня', 20} --- Здесь следует присвоить значение функции какой-то переменной и дальше вывести ее, если мы хотим получить измененный объект

// 6

function removeItem(list, name) {
    if (!list.includes(name)) { return list }

    list.splice(list.indexOf(name), 1);
    return list;
}

console.log(removeItem(['a', 'b', 'c'], 'b'));
console.log(removeItem(['a', 'b', 'c'], 'z'));
console.log(removeItem([], 'a'));

// 7

function countEven(numbers) {
    // let count = 0;

    // for (i = 0; i < numbers.length; ++i) {
    //     if (numbers[i] % 2 == 0) {count++;}
    // }

    // return count;

    const filteredNumbers = numbers.filter((value) => {
        return value % 2 == 0
    })

    return filteredNumbers.length;
}

console.log(countEven([]));
console.log(countEven([1, 3]));
console.log(countEven([2, 4, 5]));
console.log(countEven([0, 7]));

// 8-10

const names = JSON.parse(localStorage.getItem('names')) || [];

render();

function render() {

    namesItem = ''

    names.forEach((value) => {
        html = `
        <p>${value}</p>
        <button class="del-btn">Delete</button>
        `;

        namesItem += html;
    });

    document.querySelector('.names').innerHTML = namesItem;

    document.querySelectorAll('.del-btn')
        .forEach((button, index) => {
            button.addEventListener('click', () => {
                names.splice(index, 1);
                render();
                saveToStorage()
            });
        });
}

document.querySelector('.add-btn')
    .addEventListener('click', () => {

        const inputElement = document.querySelector('.name-input');
        let inputElementValue = inputElement.value.trim();

        names.push(inputElementValue);

        inputElement.value = '';

        render();

        saveToStorage()

    });

function saveToStorage() {
    localStorage.setItem('names', JSON.stringify(names));
}