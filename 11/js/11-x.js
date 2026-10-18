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

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
            <button class="del__btn" onclick="todoList.splice(${i}, 1); renderTodoList(); saveToStorage();">Delete</button>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-item').innerHTML = todoListHTML;
}

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