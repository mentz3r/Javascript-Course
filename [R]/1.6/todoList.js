let todoList = loadList('todos');

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

    saveToStorage('todos', todoList); 
}

function renderTodoList() {

    const TodoListHTML = document.querySelector('.todolist__items');

    TodoListHTML.textContent = '';

    todoList.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('todolist__item');
        li.classList.add(`todolist__item-${item.id}`);
        li.innerHTML = `
            <input class="status__item" type="checkbox" ${item.status ? 'checked' : ''} data-id="${item.id}">
            <p class="todolist__item__name todolist__item__name-${item.id}">${item.name}</p>
            <button class="delete__btn" data-id="${item.id}">
                <img src="images/free-icon-delete-216658.png">
            </button>
            <button class="edit__btn" data-id="${item.id}">
                <img src="images/free-icon-edit-1159633.png">
            </button>
        `;

        li.querySelector('.todolist__item__name').textContent = item.name;
        TodoListHTML.append(li);
    });

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

function saveToStorage(key, list) {
        localStorage.setItem(key, JSON.stringify(list));
}

function loadList(key) {
    const test = localStorage.getItem(key)
    try {
        JSON.parse(test);
        if (!Array.isArray(JSON.parse(test))) {
            throw error;
        }
        return JSON.parse(localStorage.getItem(key));;
    } catch (e) {
        return [];
    };
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
