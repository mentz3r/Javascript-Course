function sumWithForEach(numbers) { 
    let summary = 0;

    if (numbers.length > 0) {
    numbers.forEach(number => {
        summary += number;
    });

    return summary;
    } 

    return 0;
}

function numberedList(items) {
    const result = [];

    items.forEach((item, index) => {
        result.push(`${index+1}. ${item}`);
    });

    return result;
}

function indexesOfEven(numbers) {

    const result1 = [];

    numbers.forEach((item, index) => {
        if (item % 2 === 0) {
            result1.push(index)
        }
    });

    return result1;
}

function doubleAll(numbers) {
    
    const result = numbers.map(number => {
       return number*2 
    });

    return result;
}

function getNames(users) {
    const result = users.map(user => {
        return user.name
    });

    return result;
}

function addTax(pricesCents) {
    const result = pricesCents.map(cost => {
        return Math.round(cost*1.1)
    });

    return result;
}

function formatPrices(pricesCents) {
    const result = pricesCents.map(cost => {
        return `$${(Number(cost) / 100).toFixed(2)}`;
    });

    return result;
}

function capitalizeAll(words) {
    const result = words.map(item => {
        return item[0].toUpperCase() + item.slice(1);
    });

    return result;
}

function markAllDone(todos) {
    const result = todos.map(todo => {
        if (!todo.done) {
            return {...todo, done: true};
        } else {
            return todo
        }
    });

    return result;
}

function onlyEven(numbers) {

    const result = numbers.filter(number => {
        return number % 2 === 0;
    });

    return result;
}

function onlyDone(todos) {
    const result = todos.filter(todo => {
        return todo.done;
    });

    return result;
}

function countDone(todos) {
    const result = todos.filter(todo => {
        return todo.done;
    });

    return result.length;
}

function longWords(words, minLength) {
    const result = words.filter(word => {
        return word.length >= minLength ? word : '';
    });

    return result;
}

function removeEmpty(strings) {
    const result = strings.filter(str => {
        return str.length > 0;
    });

    return result;
}

function cheaperThan(products, maxCents) {
    const result = products.filter(product => {
        return product.priceCents < maxCents ? product : '';
    });

    return result;
}

function findFirstNegative(numbers) {
    return numbers.find(number => {
        return number < 0;
    });
}

function findUserByName(users, name) {
    return users.find(user => {
        return user.name === name ? user : '';
    });
}

function findProductById(products, id) { 
    return products.find(product => {
        return product.id === id ? product : ''
    });
}

function indexOfFirstLong(words, minLength) {
    return words.findIndex(word => {
        return word.length >= minLength;
    });
}

function setQuantity(cart, productId, quantity) {
    const indexOfGood = cart.findIndex(good => {
        return good.productId === productId
    });

    if (indexOfGood > 0) {
        cart[indexOfGood].quantity = quantity;
    }

    return cart;
}

function hasNegative(numbers) {
    return numbers.some(number => number < 0);
}

function allPositive(numbers) {
    return numbers.every(number => number > 0);
}

function allDone(todos) {
    return todos.every(todo => todo.done);
}

function isSortedAscending(numbers) {
    return numbers.every((number, index, numbers) => {
        return index === 0 || number >= numbers[index - 1]
    });
}

function sum(numbers) {
    return numbers.reduce((acc, number) => {
        if (numbers.length > 0) {return acc + number;}

        return 1;
    }, 0)
}

function product(numbers) {
    return numbers.reduce((acc, number) => {
        if (numbers.length > 0) {return acc * number};

        return 1
    }, 1);
}

function maxNumber(numbers) {
    return numbers.reduce((acc, number) => {
        if (acc < number) {return acc = number}
        return acc;

    }, -10000)
}

function cartTotal(items) {
    return items.reduce((acc, item) => {
        return acc + (item.priceCents * item.quantity);
    }, 0);
}

function countBy(words) {
    return words.reduce((acc, item) => {
        if (!acc[item]) {
            acc[item] = 1;
        } else {
            acc[item] += 1;
        }

        return acc;
    }, {});
}

function groupByLength(words) {
    return words.reduce((acc, item) => {
        const key = item.length;

        if (!acc[key]) {
            acc[key] = [item]
        } else {
            acc[key].push(item);
        }

        return acc;
    }, {})
}

function sortAscending(numbers) { 
    const numbersCopy = numbers.slice();

    return numbersCopy.sort((a, b) => a - b);
}

function sortDescending(numbers) {
    const numbersCopy = numbers.slice();

    return numbersCopy.sort((a, b) => b - a);
}

function sortByName(users) {
    const usersCopy = users.slice();

    return usersCopy.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
}

function sortByLength(words) {
    const copyWords = words.slice();

    return copyWords.sort((a, b) => {
        if (a.length !== b.length) {return a.length - b.length}
        return a.localeCompare(b, 'en');
    });
}

function firstN(list, n) {
    return list.slice(0, n);
}

function removeAt(list, index) {
    return list.splice(index, 1)[0];
}

function insertAt(list, index, value) {
    return list.splice(index, 0, value);
}

function sumOfEvenSquares(numbers) {
    return numbers.filter(number => number % 2 == 0)
        .map(number => number**2)
            .reduce((acc, number) => acc + number, 0);
}

function namesOfAdults(users) {
    return users.filter(user => user.age >= 18).map(user => user.name);
}

function todoSummary(todos) {
    return `${todos.filter(todo => todo.done).length} из ${todos.length} выполнено`;
}



