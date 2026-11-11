const todoList = JSON.parse(localStorage.getItem('todos')) || [];

renderTodoList();

function loadTodos() {
    let inputElement = document.querySelector('.input__name');
    const inputValue = inputElement.value.trim();
    const idElement = String();

    todoList.push({ name: inputValue, id: idElement} );

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
                <p class="todolist__item__name">${item.name}</p>
                <button class="delete__btn">
                    <img src="images/free-icon-delete-216658.png">
                </button>
                <button class="edit__btn">
                    <img>
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

    document.querySelectorAll('.edit__btn')
        .forEach((editButton, index) => {
            editButton.addEventListener('click', () => {
                if (editButton.classList.contains('save__btn')) { return; }
                
                editButton.classList.add('save__btn');

                let todoName = document.querySelectorAll('.todolist__item__name')[index];
                const inputChangedTodo = document.createElement('input');

                todoName.replaceWith(inputChangedTodo);

                document.querySelectorAll('.save__btn')
                    .forEach((saveButton) => {
                        saveButton.addEventListener('click', () => {
                            const changedTodo = inputChangedTodo.value.trim();

                            todoList[index].name = changedTodo;

                            renderTodoList();
                            saveToStorage();
                        });
                    });
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
