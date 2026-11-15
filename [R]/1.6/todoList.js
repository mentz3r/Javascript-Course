let todoList = JSON.parse(localStorage.getItem('todos')) || [];

renderTodoList();

function loadTodos() {
    let inputElement = document.querySelector('.input__name');
    const inputValue = inputElement.value.trim();
    const elementId = Math.round((Math.random() * 100000));

    todoList.push({
        name: inputValue,
        status: false,
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
            <li class='todolist__item todolist__item-${item.id}'>
                <input class="status__item" type="checkbox" ${item.status ? 'checked' : ''} data-id="${item.id}">
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

    document.querySelectorAll('.status__item')
    .forEach(radio => {
        radio.addEventListener('change', (r) => {
            updateTodoStatus(r.target.dataset.id);
            saveToStorage();
            renderTodoList();
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

function updateTodoStatus(todoId) {
    todoList.forEach(todo => {
        if (todo.id === todoId) {
            todo.status = !todo.status;
        }
    });
}

function saveTodoFromKeyboard(event) {
    if (event.key === 'Enter') {
        loadTodos();
    }
}

function updateRenderFilter(action) {
    if (action !== 'all') {
        todoList = todoList.filter(item => {
            if (action === 'done') {
                return item.status;
            } else if (action === 'active') {
                return !item.status;
            }
        });
        renderTodoList();
    } else {
        todoList = JSON.parse(localStorage.getItem('todos')) || [];
        renderTodoList();
    }
}

document.querySelector('.doneItem__btn')
    .addEventListener('click', () => {updateRenderFilter('done')});

document.querySelector('.activeItem__btn')
    .addEventListener('click', () => {updateRenderFilter('active')});

document.querySelector('.allItem__btn')
    .addEventListener('click', () => {updateRenderFilter('all')});

document.querySelector('.add__btn')
    .addEventListener('click', loadTodos);

document.querySelector('.input__name')
    .addEventListener('keydown', saveTodoFromKeyboard);
