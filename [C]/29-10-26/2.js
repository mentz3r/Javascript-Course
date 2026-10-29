// ТЕСТ НА ТЕОРИЮ 
//  1) TypeError и ReferenceError 
//  2) Аня Катя 20
//  3) undefined
//  4) undefined
//  5) <p>hi</p>.


// 1

function fomatAge(age) {
    return typeof age !== 'number' ? 'Нет данных' : `Возраст: ${age}`;
}

console.log(fomatAge(25));
console.log(fomatAge(0));
console.log(fomatAge());
console.log(fomatAge(''));
console.log(fomatAge(' '));

// 2

function withAge(user, age) {
    return {...user, age}
}

const anya = {name: 'anya'};
const older = withAge(anya, 21);
console.log(anya, older);

// 3

function addName(names, value) {
    if (value == 0) {return false}
    else {
        names.push(value.trim());
        return names;
    }
}

const list = ['a'];
console.log(addName(list, '1'));
console.log(addName(list, '     '));
console.log(addName(list, ' '));

// 4

// Ошибка заключается в том, что мы обращаемся к свойству, написав его неправильно (deliveryOptionsId вместо deliveryOptionId). Выведет undefiend, посколько свойства с таким именем нет, поэтому какой-то ошибки Reference/Type- Error здесь не выдает. Опечатку я бы искал так: выделил мы название свойства с объекта, и VS Code высветил бы мне, где такое имя еще встречается, заметил, что его нигде нет и исправил бы. 

// const cart = [{ productId: 'a', quantity: 2, deliveryOptionId: '3' }];

// function getDeliveryId(cartItem) {
//   return cartItem.deliveryOptionId;
// }

// console.log(getDeliveryId(cart[0]));

// 5

const tasks = [
    { id: 1, name: 'a' }, 
    { id: 2, name: 'b' }, 
    { id: 3, name: 'c' }
];

function removeById(list, id) {

    const filteredList = list.filter(task => {
        return task.id !== id
    })

    return filteredList

}

console.log(tasks);
console.log(removeById(tasks, 2));
console.log(removeById(tasks, 99));

// По id удалять будет надежнее потому, что количество условных task`ов может меняться, и наш элемент спустя время может перескочить с 0 на 2 индекс (условно), а задавая и находя элемент через id, мы точно не ошибемся.