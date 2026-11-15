let todoList = loadList('todos');
let renderStatus = 'all';

renderTodoList();

function loadTodos() {
    let inputElement = document.querySelector('.input__name');
    const inputValue = inputElement.value.trim();
    const elementId = Math.round((Math.random() * 100000));

    if (inputValue.length > 0) {
        todoList.push({
            name: inputValue,
            status: false,
            id: `${elementId}`,
        });
    }

    renderTodoList();

    inputElement.value = '';

    saveToStorage('todos', todoList);
}

function renderTodoList() {
    const newTodoList = todoList.slice();

    const TodoListHTML = document.querySelector('.todolist__items');

    TodoListHTML.textContent = '';

    if (renderStatus === 'all') {
        newTodoList.forEach(item => {
            createHTMLElement(item, TodoListHTML);
        });
    } else if (renderStatus === 'done') {
        newTodoList.filter(item => item.status).forEach(item => {
            createHTMLElement(item, TodoListHTML);
        });
    } else if (renderStatus === 'active') {
        newTodoList.filter(item => !item.status).forEach(item => {
            createHTMLElement(item, TodoListHTML);
        });
    }

    document.querySelectorAll('.delete__btn')
        .forEach((deleteButton) => {
            deleteButton.addEventListener('click', () => {
                removeFromList(deleteButton.dataset.id);
                renderTodoList();
                saveToStorage('todos', todoList);
            });
        });

    document.querySelectorAll('.status__item')
        .forEach(radio => {
            radio.addEventListener('change', (r) => {
                updateTodoStatus(r.target.dataset.id);
                saveToStorage('todos', todoList);
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

                    if (changedTodo.length > 0) {
                        todoList.forEach(todo => {
                            if (todo.id === editButton.dataset.id) {
                                todo.name = changedTodo;
                            }
                        });

                        todoName.textContent = changedTodo;
                        inputChangedTodo.replaceWith(todoName);
                        editButton.classList.remove('save__btn');
                        editButton.innerHTML = '<img src="images/free-icon-edit-1159633.png">';
                        saveToStorage('todos', todoList);
                    } else {
                        inputChangedTodo.replaceWith(todoName);
                        editButton.classList.remove('save__btn');
                        editButton.innerHTML = '<img src="images/free-icon-edit-1159633.png">';
                    }
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

function createHTMLElement(item, list) {
    const li = document.createElement('li');
    li.classList.add('todolist__item');
    li.classList.add(`todolist__item-${item.id}`);
    li.innerHTML = `
                <input class="status__item" type="checkbox" ${item.status ? 'checked' : ''} data-id="${item.id}">
                <p class="todolist__item__name todolist__item__name-${item.id}"></p>
                <button class="delete__btn" data-id="${item.id}">
                    <img src="images/free-icon-delete-216658.png">
                </button>
                <button class="edit__btn" data-id="${item.id}">
                    <img src="images/free-icon-edit-1159633.png">
                </button>
            `;

    li.querySelector('.todolist__item__name').textContent = item.name;
    list.append(li);
}

function removeFromList(todoId) {
    todoList = todoList.filter(todo => todo.id !== todoId);
}

function saveToStorage(key, list) {
    localStorage.setItem(key, JSON.stringify(list));
}

function loadList(key) {
    try {
        const parseData = JSON.parse(localStorage.getItem(key));
        if (!Array.isArray(parseData)) {
            throw new Error('распарсился не массив');
        }
        return parseData;
    } catch {
        return [];
    }
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
    renderStatus = action;
}

document.querySelector('.doneItem__btn')
    .addEventListener('click', () => {
        updateRenderFilter('done');
        renderTodoList();
    });

document.querySelector('.activeItem__btn')
    .addEventListener('click', () => { updateRenderFilter('active'); renderTodoList(); });

document.querySelector('.allItem__btn')
    .addEventListener('click', () => { updateRenderFilter('all'); renderTodoList(); });

document.querySelector('.add__btn')
    .addEventListener('click', loadTodos);

document.querySelector('.input__name')
    .addEventListener('keydown', saveTodoFromKeyboard);
