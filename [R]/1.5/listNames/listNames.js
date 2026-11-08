const users = JSON.parse(localStorage.getItem('users')) || [];

renderList();

function addToUsers() {
    let inputName = document.querySelector('.input__name');
    let inputAge = document.querySelector('.input__age');

    const namesValue = inputName.value.trim();
    const agesValue = Number(inputAge.value.trim());

    if (namesValue.length === 0 || inputAge.value.trim().length === 0) {
        alert('Please write your data!');
        return;
    }

    else if (agesValue <= 0 || !Number.isInteger(agesValue)) { 
        alert(`Invalid syntax: ${inputAge.value}. Please use a valid numbers!`);
        return;
    } else if (Number(namesValue)) {
        alert(`Invalid syntax: ${inputName.value}. Please use a letters`);
        return;
    }
    else if (namesValue && agesValue) {
        users.push({namesValue, agesValue});
    }


    inputName.value = '';
    inputAge.value = ''; 

    renderList();

    localStorage.setItem('users', JSON.stringify(users));
}

function renderList() {
    const usersList = document.querySelector('.users__list');

    usersList.textContent = '';

    users.forEach(user => {
        const liElement = document.createElement('li');
        const name = user.namesValue;
        const age = user.agesValue;

        liElement.textContent = `Name: ${name} Age: ${age}`;

        usersList.append(liElement);
    });
}

function saveFromKeyboard(event) {
    if (event.key === 'Enter') {
        addToUsers();
    }
}

document.querySelector('.add__btn')
    .addEventListener('click', addToUsers);

document.querySelector('.input__age')
    .addEventListener('keydown', saveFromKeyboard);