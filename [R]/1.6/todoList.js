const todoList = JSON.parse(localStorage.getItem('todos')) || [];

renderTodoList();

function loadTodos() {
    let inputElement = document.querySelector('.input__name');
    const inputValue = inputElement.value.trim();

    todoList.push(inputValue);

    renderTodoList();

    inputElement.value = '';

    saveToStorage();
}

function renderTodoList() {

    let htmlElement = ``;

    todoList.forEach(item => {
        htmlElement += `
            <li class="todolist__item">
                <input class="status__item" type="radio">
                <p class="todolist__item__name">${item}</p>
                <button class="delete__btn">
                    <img src="images/free-icon-delete-216658.png">
                </button>
            </li>
        `
    });

    document.querySelector('.todolist__items').innerHTML = htmlElement;

    document.querySelectorAll('.delete__btn')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
            saveToStorage();
        });
    });
}

function saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(todoList));
}

function saveTodoFromKeyboard(event) {
    if (event.key === 'Enter') {
        loadTodos();
    }
}

document.querySelector('.add__btn')
    .addEventListener('click', loadTodos);

document.querySelector('.input__name')
    .addEventListener('keydown', saveTodoFromKeyboard);
