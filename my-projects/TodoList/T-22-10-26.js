let todoList = JSON.parse(localStorage.getItem('todos')) || [];

renderTodoList();

function renderTodoList() {

    let todoItemHTML = '';

    todoList.forEach(todoObject => {
        const { name, dueDate } = todoObject;
        const html = `
            <div class="todo__item__name">${name}</div> 
            <div class="todo__item__date">${dueDate}</div>
            <button class="done__btn">Done?</button>
            <button class="del__btn"></button>`
        todoItemHTML += html;
    });

    document.querySelector(`.todo__item`).innerHTML = todoItemHTML;

    document.querySelectorAll('.del__btn')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', function() {
                setTimeout(() => {
                    todoList.splice(index, 1);
                    renderTodoList();
                    saveToStorage();
                }, 1000);
                // document.querySelector('.todo__item__name') /// Разобраться, как добираться именно до этого элемента
                //     .classList.add('removing');
                // document.querySelector('.todo__item__date')
                //     .classList.add('removing');
            })
        });
    
    // document.querySelectorAll('.done__btn')
    //     .forEach((statusButton) => {
    //         statusButton.addEventListener('click', function() {
    //             const todoItem = this.closest('.todo__item');

    //             if (todoItem) {
    //                 todoItem.querySelector('.todo__item__name').classList.add('done');
    //                 todoItem.querySelector('.todo__item__date').classList.add('done');
    //             }
    //         })
    //     })
}

document.querySelector('.add__btn')
    .addEventListener('click', () => {
        loadTodos();
    })

document.querySelector('.clear__btn')
    .addEventListener('click', () => {
        todoList = [];
        renderTodoList();
        saveToStorage();
    })

function loadTodos() {

    const inputTodoElement = document.querySelector('.input__item');
    const inputDateElement = document.querySelector('.input__date');

    const name = inputTodoElement.value;
    const dueDate = inputDateElement.value;

    if (inputTodoElement.value) {
        todoList.push({ name, dueDate });
    }

    inputTodoElement.value = '';

    renderTodoList();

    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(todoList));
}