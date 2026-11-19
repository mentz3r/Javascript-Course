// Теория

// Т1
// NaN === NaN --> false
// '5' + 1 --> '51'
// '5' - 1 --> 4
// '' == 0 --> true
// null == undefined --> true
// null === undefined --> false
// Чтобы проверить, что значение NaN, можно провести проверку Number.isNaN()
// x == NaN не сработает, так как мы сравниваем наше x просто с falsy-значением. То есть здесь мы просто проверяем, ложно ли x. 


// Т2
// Этот код выведет NaN. Сама функция не возвращает те вычисления, которые там производятся, так чтотона вернет undefined. А если провести какие-то математические операции с undefined, то мы получим NaN

// Т3
// Код выведет Аня - Москва. Имя не изменилось. так как мы сделали копию исходного объекта через {...object}. НО: поскольку в исзодной объекте у нас есть еще один объект (вложенный), последующие его изменения через копию будут применяться и на исходник. Это происходит потому, что такие вложенные объекты не копираются полностью, как сам объект.

// Т4
// Number('') & Number(null) --> 0, так как это такие же falsy-значение, как сам 0. В целом false = 0, a true = 1 (кроме, может, NaN и undefined)
// Number(' ') --> 0. Не могу объяснить четко. Наверное имеет свзяь с предыдущим
// Number(true) --> 1. Любой true == 1
// Number('12px') --> NaN. Так как строка состоит и из числа, и из обычных букв. Она не может перевести однозначно в false или true, поэтому получаем NaN 
// Number(x) не подойдет для проверки "это число?", так как, кпримеру, строку '1' оно переведет в 1, что будет true. Следует использовать проверки с typeof || Number.isNaN() и тд

// Т5
// НЕ ПОНЯЛ

// Т6
// Опасность заклчается в том, что при таком инпуте выполнится проивзольный JS код, что может повлечь за собой каржу данных. Следует создает через createElement объект li и присвоить ему это имя через textContent

// Т7
// При включенном фильтре Done в моей реализации список сначала никак не меняется, но если мы перейдем по кнопку Show All или просто перезагрузим страницу, то мы увидим новый элемент в списке. Это говорит о том, что новые "дела" сохраняются в локальное хранилище вне зависимости от фильтра. А если бы фильтр был реализован через todoList = todoList.filter(...), то это послужило бы несохранением нового дела в список при включенном фильтре done (тк начальный статус выполнения false)

// Т8 - Т10 ОСТАВЛЯЮ НА ПОТОМ. СЕГОДНЯ НАЧНУ ИЗУЧЕНИЕ ПЕРВЫХ БЛОКОВ 

///////////////////////////////////////////////////////////////////////////////////////////////////

// Практика
const check = (name, actual, expected) =>
  console.assert(JSON.stringify(actual) === JSON.stringify(expected), name, '→ получил', actual);

// П1

function getMin(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null
    }
    let result = arr[0] || 100000;

    arr.forEach(element => {
        if (element < result && (typeof element === 'number' && !Number.isNaN(element))) {
            result = element;
        }
    });

    return result;
}

check('getMin', getMin([5, 3, 8]), 3);
check('getMin', getMin([-5, -2, -9]), -9);
check('getMin', getMin([7, 'x', null, 2]), 2);
check('getMin', getMin([NaN, 4]), 4);
check('getMin', getMin([]), null);
check('getMin', getMin(null), null);
check('getMin', getMin('abc'), null);

// П2

function countDigits(str) {
    if (typeof str !== 'string') {
        return 0
    }
    const splittedSTR = str.trim().split('');

    return splittedSTR.filter(element => {
        return '0123456789'.includes(element); 
    }).length
}

check('countDigits("a1b2c3")', countDigits("a1b2c3"), 3);
check('countDigits("12 34")', countDigits("12 34"), 4);
check('countDigits("\t\n")', countDigits("\t\n"), 0);
check('countDigits("")', countDigits(""), 0);
check('countDigits(12345)', countDigits(12345), 0);

// П3

const myUsers1 = [
  { name: 'Боря', age: 30 }, { name: 'Аня', age: 25 },
  { name: 'Вера', age: 30 }, { name: 'Гена', age: 25 },
];

function sortUsers(users) {
    const copyUsers = users.slice();

    return copyUsers.sort((a, b) => {
        if (a.age === b.age) {
            return b.name - a.name;
        }

        return b.age - a.age;
    }).map(user => user.name);
}

check('sortUsers(myUsers1)', sortUsers(myUsers1), ['Боря', 'Вера', 'Аня', 'Гена']);

// П4

function clamp(n, min, max) {
    if (min > max || !Number.isInteger(n)) {
        return null;
    }

    if (n >= min && n <= max) {
        return n;
    } else {
        return n < min ? min : max
    }
}

check('clamp(5, 0, 3)', clamp(5, 0, 3), 3);
check('clamp(-1, 0, 3)', clamp(-1, 0, 3), 0);
check('clamp(2, 0, 3)', clamp(2, 0, 3), 2);
check('clamp(0, 0, 3)', clamp(0, 0, 3), 0);
check('clamp("5", 0, 10)', clamp('5', 0, 10), null);
check('clamp(NaN, 0, 3)', clamp(NaN, 0, 10), null);
check('clamp(Infinity, 0, 3)', clamp(Infinity, 0, 10), null);
check('clamp(5, 10, 0)', clamp(5, 10, 0), null);


// П5

const myUsers2 = [
  { id: 1, name: 'Аня', address: { city: 'Калининград', street: 'Ленина' } },
  { id: 2, name: 'Боря', address: { city: 'Москва', street: 'Тверская' } },
];

function updateUserCity(users, id, city) {
    return users.map(user => {
        if (user.id === id) {
            return {...user, address: {city: city, street: user.address.street}}
        }
    });
}

const newUsers = updateUserCity(myUsers2, 1, 'Санкт-Петербург');

check('newUsers[0].address', newUsers[0].address, {city: 'Санкт-Петербург', street: 'Ленина'});
check('myUsers2[0].address', myUsers2[0].address, {city: 'Калининград', street: 'Ленина'});


// П6

function saveParse(text, fallback) {
    try {
        const parsed = JSON.parse(text);
        if (parsed === null) {
            throw new Error('null is a text')
        }
        return parsed;
    } catch {
        return fallback;
    }
}

check('', saveParse('{"a":1}', {}), {a: 1});
check('', saveParse('abc', 5), 5);
check('', saveParse(null, 5), 5);
check('', saveParse('null', 7), 7);
check('', saveParse('0', 5), 0);
check('', saveParse('false', true), false);
check('', saveParse('""', 'x'), '');

// П7

function parsePositiveInt(input) {
    if (typeof input !== 'string' && typeof input !== 'number') {
        return null;
    }
    try {
        const parsed = JSON.parse(input);
        if (typeof parsed === 'number' && Number.isInteger(parsed) && parsed > 0) {
            return parsed;
        }
        throw new Error('mistake');
    } catch {
        return null;
    }
}

check('"42"', parsePositiveInt('42'), 42);
check('" 7 "', parsePositiveInt(' 7 '), 7);
check('42', parsePositiveInt(42), 42);
check('""', parsePositiveInt(''), null);
check(' ', parsePositiveInt(' '), null);
check('"0"', parsePositiveInt('0'), null);
check('"-3"', parsePositiveInt('-3'), null);
check('"4.5"', parsePositiveInt('4.5'), null);
check('"12px"', parsePositiveInt('12px'), null);
check('0', parsePositiveInt(0), null);
check('4.5', parsePositiveInt(4.5), null);
check('Infinity', parsePositiveInt(Infinity), null);
check('null', parsePositiveInt(null), null);
check('true', parsePositiveInt(true), null);
check('[5]', parsePositiveInt([5]), null);

// П8

function groupBy(items, keyFn) {
    if (!Array.isArray(items) || items.length === 0) {
        return {};
    }
    const result = {};

    items.forEach(item => {
        const key = keyFn(item);

        if (!result[key]) {
            result[key] = [item];
        } else {
            result[key].push(item);
        }
    });

    return result;
}

check('Math.floor()', groupBy([1.2, 1.5, 2.1], Math.floor), { 1: [1.2, 1.5], 2: [2.1] });
check('First letter', groupBy(['apple', 'avocado', 'banana'], s => s[0]), {a: ["apple", "avocado"], b: ["banana"]});
check('Empty array', groupBy([], x => x), {});
check('Is not an array', groupBy('abc', x => x), {})

