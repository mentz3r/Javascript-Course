let todoList = JSON.parse(localStorage.getItem('todos')) || [];

renderTodoList();

function loadTodos() {
    let inputElement = document.querySelector('.input__name');
    const inputValue = inputElement.value.trim();
    const elementId = Math.round((Math.random() * 100000));

    todoList.push({
        name: inputValue,
        status: 'not done',
        id: `${elementId}`,
    });

    renderTodoList();

    inputElement.value = '';

    saveToStorage();
}

function renderTodoList() {

    let htmlElement = ``;

    todoList.forEach(item => {
        htmlElement += `
            <li class='todolist__item'>
                <input class="status__item" type="radio">
                <p class="todolist__item__name todolist__item__name-${item.id}">${item.name}</p>
                <button class="delete__btn" data-id="${item.id}">
                    <img src="images/free-icon-delete-216658.png">
                </button>
                <button class="edit__btn" data-id="${item.id}">
                    <img src="images/free-icon-edit-1159633.png">
                </button>
            </li>
        `
    });

    document.querySelector('.todolist__items').innerHTML = htmlElement;

    document.querySelectorAll('.delete__btn')
    .forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            removeFromList(deleteButton.dataset.id);
            renderTodoList();
            saveToStorage();
        });
    });

    document.querySelectorAll('.edit__btn')
        .forEach((editButton) => {
            const inputChangedTodo = document.createElement('input');
            let todoName;

            editButton.addEventListener('click', () => {

                if (editButton.classList.contains('save__btn')) {

                    const changedTodo = inputChangedTodo.value.trim();

                    todoList.forEach(todo => {
                        if (todo.id === editButton.dataset.id) {
                            todo.name = changedTodo;
                        }
                    });

                    todoName.textContent = changedTodo;
                    inputChangedTodo.replaceWith(todoName);
                    editButton.classList.remove('save__btn');
                    editButton.innerHTML = '<img src="images/free-icon-edit-1159633.png">';
                    saveToStorage(); 
                }
                
                else {
                    editButton.classList.add('save__btn');
                    editButton.innerHTML = '<img src="images/free-icon-confirm-271205.png">'


                    todoName = document.querySelector(`.todolist__item__name-${editButton.dataset.id}`);

                    todoName.replaceWith(inputChangedTodo);
                }
            });
        });
}

function removeFromList(todoId) {
    todoList = todoList.filter(todo => todo.id !== todoId);
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
