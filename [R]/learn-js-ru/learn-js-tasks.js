// 1

function camelize(str) {
    const arrayWord = str.split('-');

    // arrayWord.forEach((element, index) => {
    //     if (arrayWord.indexOf(element) !== 0 && element !== '') {
    //         const newElement = element[0].toUpperCase() + element.slice(1);
    //         arrayWord.splice(index, 1, newElement);
    //     }
    // });

    // const newString = arrayWord.join('')
    // return newString; 

    const newString = arrayWord.map((element, index) => {
        return index === 0 ? element : element[0].toUpperCase() + element.slice(1);
    }).join('');

    return newString;


    // return str.split('-').map((element, index) => index === 0 ? element : element[0].toUpperCase() + element.slice(1)).join('');
}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));

// 2

function filterRange(arr, a, b) {
    const filteredArray = arr.filter(element => {
        return element >= a && element <= b;
    });

    return filteredArray
}

let arr = [5, 3, 8, 1];

const filtered = filterRange(arr, 1, 4)

console.log(arr);

console.log(filtered);

// 3

function filterRangeInPlace(arr, a, b) {
    
    arr.forEach((element, index) => {
        if (element < a || element > b) {
            arr.splice(index, 1)
        }
    });
}

filterRangeInPlace(arr, 1, 4);

console.log(arr);

// 4

let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

console.log(arr1);

// 6

let arr2 = ['HTML', 'JavaScript', 'CSS']

function copySorted(arr) {
    return arr.slice().sort()
}

const sorted = copySorted(arr2);

console.log(sorted);

console.log(arr2);

// 7

function Calculator() {
    this.calculate = function(str) {
        const operation =  str.split(' ');
        const firstNumber = Number(operation[0]);
        const secondNumber = Number(operation[2]);
        if (operation[1] === '+') {
            return firstNumber + secondNumber;
        } else if (operation[1] === '-') {
            return firstNumber - secondNumber;
        }
    };
}

let calc = new Calculator;

console.log(calc.calculate("7 + 3"));
console.log(calc.calculate("7 - 3"));

// 8

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

console.log(names);

// 9

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];


let users1Mapped = users1.map(user => {
    return {fullName: user.name + ' ' + user.surname, id: user.id};
    
});

console.log(users1Mapped);

// 10

function shuffle(arr) {
    console.log(arr.sort(() => Math.random() - 0.5));
}

let arr3 = [1, 2, 3];

shuffle(arr3);

shuffle(arr3);

shuffle(arr3);

// 11

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr4 = [ vasya2, petya2, masha2 ];

function getAverageAge(users) {
    return users.reduce((acc, item) => {
        return acc += item.age
    }, 0) / users.length;
}

console.log(getAverageAge(arr4));

// 12

function unique(arr) {

    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}

console.log(unique(["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"]));

// 13

function groupById(arr) {
    const result = arr.reduce((user, data) => {
        user[data.id] = data;
        return user;
    }, {});

    return result;
}

let users2 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users2);

console.log(usersById);