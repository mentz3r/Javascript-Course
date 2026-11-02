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


