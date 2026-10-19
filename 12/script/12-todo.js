let todoList = JSON.parse(localStorage.getItem('todoItem')) || [{
    name: 'make dinner',
    dueDate: '2022-12-22'
}, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
            <button class="del__btn js-del-btn">Delete</button>`;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-item').innerHTML = todoListHTML;

    document.querySelectorAll('.js-del-btn')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
                saveToStorage();
            })
        });
}

document.querySelector('.js-add-btn')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const inputDate = document.querySelector('.js-date-input')

    const name = inputElement.value;
    const dueDate = inputDate.value;

    todoList.push({ name, dueDate });

    inputElement.value = '';

    renderTodoList();

    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todoItem', JSON.stringify(todoList));
}

function keySave(event) {
    if (event.key === 'Enter') { addTodo(); }
}