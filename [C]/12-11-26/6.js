// Теория

// Т1 
// В первой строке создаем массив arr = [1, 2]; Вторая строка - добавлени элемент 3 в наш массив - он встанет в конец массива; Третья строка - будет ошибка, так как const не даст нам перезаписать наш массив

// T2
// 0 || 10 --> 10
// 0 ?? 10 --> 0
// '' || 'x' --> 'x'
// null ?? 'x' --> 'x'
// undefiend?.name -> undefiend (пояснение для себя: защитит нас в том случае, если данные станут null или undefiend [вместо ошибки выдаст undefiend и из-за этого код продолжит свою работу])

// Чуть не понял вопроса, но постараюсь ответить как понял. || будет давать неверный результат, когда мы будем работать со значениями по умолчанию. К примеру, если мы хотим задать какому-либо объекту значение громкости по умолчанию === 0, то || будет давать неверный в нашем случае результат (следует использовать ??)

// Т3
// а) ReferenceError --> переменная price не задана, ее в целом нет
// б) TypeError --> у null - не объект
// в) ReferenceError --> let b существует в пределах if () {}. Как только выходим оттуда, переменная перестает существовать

// Т4
// "Функция вывела на экран" - это значит, что мы просим у функции отработать код внутри ее (проделать какие-то преобраования, например) и вывести (в консоль, всплывающее окно) это получившийся результат. А "функция вернула значение" - это значит, чот мы просим функции также отработать свой код, но уже по завершении работы вернуть нам получившийся результат, чтобы дальше работать с новыми данными.

// Пример
const myArray = [1, 2, 3];

function doubledArray(arr) {
    console.log(arr.map(value => value * 2));
}

doubledArray(myArray); // Можем посмотреть результат работы нашей фунции

const resultArray = doubledArray(myArray); // Выведет снова
console.log(resultArray); // Но работать с получившимся массивом не сможем

// Т5
// 5, 5, 9, true, false. Это происходит потому, что в первом случае мы создаем копию первого объекта с такой ссылкой на локальное хранилище, а во втором - создаем полностью новый объект, но с точно такими же данными
// { n: 1 } === { n: 1 } --> false, так как мы сравниваем не их значение, а в целом два разных объекта с ращными ссылками. Именно поэтому такое равенство никога не будет верным.

// Т6
// removed = [2, 3] -- Когда мы создаем переменную = arr.splice(), то мы получаем список удаленных элементов заданного arr.
// a = [1, 2, 3, 4, 5] --> [1, 4, 5] (т.к. удалили два элемента по индексу 1) --> [1, 4, 5, 99] (т.к. b ссылается на тот же объект, что и a) 
// c = [1,4,0] -- arr.slice(): Создаем новый массив, состоящий из элементов arr по заданному полуинтервалу (левая граница включительна, правая нет), не трогая заданный массив

// Т7
// Код выдаст массив, состоящий из трех undefiend-ов. Это происходит потому, что нарушен синтаксис стрелочной функции: если мы ходим писать с фигурными скобками, то обязателен return, если не хотим - return необязателен. 
// map() отличается от forEach() тем, что с помощтю метода map() мы можем создать новый массив, равного по длине исходного и состоящего из измененных исходных элементов по заданному условию, а forEach() - метод, заменяющий нам тот же самый цикл for. 
// filter() вернет новый массив, равный длине или меньше исходного, состоящий из элементов, отфильтрованных потзаданному условию

// Т8
// В случае, если у нас в целом нет элемента с таким css-селектором или же наш код выполняется слишком рано (такого элемента ПОКА еще не существует [к примеру, если script у нас висит не в body, а в head]). Тогда .addEventListener даст нам ошибку TypeError.

// Т9
// В таком случае, у нас вставится html-элемент -- картинка, что не есть хорошо. Для безопасной вставки текста лучше использовать textContent

// Т10
// a) null. localStorage хранит данные в виде строки
// б) Выдаст ошибку. Интуитивно это понимаю, но как-то объяснить не могу (если только можно сказать, что при парсинге 'abc' это не массив и не объект, а просто строка). Для защиты следует использовать проверку Array.isArray
// в) При перезагрузке страницы удаленный элемент вернется.

// На вопрос со зведочкой не смог дать ответ

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Практика

// П1

function getMax(array) {
    let result = null;

    for (let i = 0; i < array.length; ++i) {
        if (typeof array[i] !== 'number' || array[i] == NaN) {
            continue;
        } else {
            if (result < array[i] || result < -array[i]) {
                result = array[i];
            }
        }
    }
    return result
}

console.log(getMax([3, 9, 2]));
console.log(getMax([3, 9, 9]));
console.log(getMax([-5, -2, -9]));
console.log(getMax([5, 'x', 7, null]));
console.log(getMax([NaN, 4]));
console.log(getMax([]));
console.log(getMax(['abc']));

// П2

function isValidPassword(str) {
    if (typeof str !== 'string' || str === false) {
        return false;
    }

    const password = str.split('');
    let countValidL = 0;
    let countValidN = 0;

    if (password.length < 8 || password.includes(" ")) {
        return false;
    }

    password.forEach(element => {
        if (element === element.toUpperCase() && element != Number(element)) {
            countValidL++
        } else if (element == Number(element)) {
            countValidN++
        }
    });

    if (countValidL >= 1 && countValidN >= 1) {
        return true
    }

    return false;
}

console.log(isValidPassword('Passw0rdX'));
console.log(isValidPassword('password1'));
console.log(isValidPassword('Pass word1'));
console.log(isValidPassword('Ab1'));
console.log(isValidPassword(null));
console.log(isValidPassword(12345678));
console.log(isValidPassword());

// П3

function countWords(text) {

    if (!text || text == Number(text)) {
        return {};
    }

    const words = text.split(' ');
    const result = {};

    words.forEach(word => {
        const validWord = word.toLowerCase();
        if (validWord == '') { return; }
        if (!result[validWord]) {
            result[validWord] = 1;
        } else {
            result[validWord]++
        }
    });

    return result;
}

console.log(countWords('a b A c a b'));
console.log(countWords('  Hello   hello '));
console.log(countWords());
console.log(countWords(''));
console.log(countWords('42'));
console.log(countWords(42));

// П4

function average(list) {

    // Добавим следующие проверки:
    // 1) что передаваемое значеничие - это массив (проверка для третьего console.log())
    // 2) его длина не равна 0 (проверка для второго console.log())
    // 3) передаваемое значение - true
    if (!Array.isArray(list) || list.length === 0 || !list) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < list.length; i++) { // берем строгое неравенство, чтобы не выйти за пределы массива
        sum += list[i];
    }
    return sum / list.length;
}
console.log(average([2, 4, 6])); // ждём 4
console.log(average([]));        // ждём 0
console.log(average('abc'));     // ждём 0

// П5

const original = {name: 'Anya', addres: {city: 'Kaliningrad'}};

function withCity(user, city) {
    if (typeof city !== 'string' || city == Number(city)) {
        return 'Invalid syntax';
    }

    return {...user, addres: {city: city}};
}

const moved = withCity(original, 'Moscow');
console.log(moved);
console.log(original); // Исходный объект не тронут

// П6

const orders = [
  { id: 1, customer: 'Аня', total: 120, paid: true },
  { id: 2, customer: 'Боря', total: 50, paid: true },
  { id: 3, customer: 'Аня', total: 200, paid: false },
  { id: 4, customer: 'Аня', total: 80, paid: true },
];

function paidTotalByCustomer(orders) {
    return orders.filter(order => order.paid).reduce((acc, order) => {
        if (!acc[order.customer]) {
            acc[order.customer] = order.total;
        } else {
            acc[order.customer] += order.total;
        }

        return acc;
    }, {});
}

console.log(paidTotalByCustomer(orders));

// П7

const todos = [
  { id: 'a1', name: 'Купить хлеб', done: false },
  { id: 'b2', name: 'Учить JS', done: true },
  { id: 'c3', name: 'Сходить в зал', done: false },
];

// а)

function toggleDone(todos, id) {
    return todos.map(todo => {
        if (todo.id === id) {
            return {...todo, done: !todo.done};
        } else {
            return todo;
        }
    });
}

// б)

function getStats(todos) {
    if (!Array.isArray(todos)) {return {total: 0, done: 0, active: 0}};
    return {
        total: todos.length,
        done: todos.reduce((acc, todo) => {
            return acc += todo.done;
        }, 0),
        active: todos.reduce((acc, todo) => {
            return acc += !todo.done
        }, 0),
    };
}

console.log(getStats(todos));
console.log(getStats('avc'));

// П8

function loadList(key) {
    const test = localStorage.getItem(key)
    try {
        JSON.parse(test);
        if (!Array.isArray(JSON.parse(test))) {
            throw error;
        }
        return JSON.parse(localStorage.getItem(key));;
    } catch (e) {
        return [];
    };
}

function saveList(key, list) {
    localStorage.setItem(key, JSON.stringify(list));
}


// localStorage.setItem('k', 'abc');
// console.log(loadList('k'));
// localStorage.clear();

// localStorage.setItem('k', '{}');    
// console.log(loadList('k'));
// localStorage.clear();

// localStorage.setItem('k', '[1,2]'); 
// console.log(loadList('k'));
// localStorage.clear();

// console.log(loadList('нет-такого'));
// localStorage.clear();

// П9
const todoList = loadList('todos');

renderTodoList();

function addTodo() {
    let inputTodo = document.querySelector('.todo__input')
    const inputValue = inputTodo.value.trim();

    if (inputValue.length > 0) {
        todoList.push(inputValue);
    }

    renderTodoList();

    inputTodo.value = '';

    saveList('todos', todoList)

}

function renderTodoList() {
    const TodoListHTML = document.querySelector('.todo__list');

    TodoListHTML.textContent = '';

    todoList.forEach(todo => {
        const elementLi = document.createElement('li');
        const deleteButton = document.createElement('button');

        elementLi.textContent = todo;

        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('del__btn')

        TodoListHTML.append(elementLi, deleteButton);
    });

    document.querySelectorAll('.del__btn')
        .forEach((button, index) => {
            button.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
                saveList('todos', todoList);
            })
        });
        
}

document.querySelector('.add__btn')
    .addEventListener('click', addTodo);

document.querySelector('.todo__input')
    .addEventListener('keydown', saveFromKeyboard);

function saveFromKeyboard(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

// П10

function topWords(text, n) {
    const obj = countWords(text);
    const result = [];

    Object.keys(obj).forEach(key => {
        result.push([key, obj[key]]);
    });

    result.sort((a, b) => b[1] - a[1]);
    return result.slice(0, n); 
}

console.log(topWords('b a b c a b', 2));
console.log(topWords('x y z', 2));
console.log(topWords('', 3));
