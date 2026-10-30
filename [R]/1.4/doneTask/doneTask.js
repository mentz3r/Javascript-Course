import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const todoList = [
    {
        id: '1',
        task: 'Проверить квартиру',
        dateDue: '30-10-26',
    }, {
        id: '2',
        task: 'Помыть машину',
        dateDue: '31-10-26',
    }, {
        id: '3',
        task: 'Выполнить домашку',
        dateDue: '30-10-26',
    }, {
        id: '4',
        task: 'Встретить отца с аэропорта',
        dateDue: '30-10-26',
    }
];

const isCompletedTask = (list => {

    const today = dayjs().format('D-M-YY');
    let doneAmount = 0;
    let newList = [];

    list.forEach((todoItem) => {
        if (todoItem.dateDue === today) {
            todoItem.status = 'done';
        } else {
            todoItem.status = 'not done yet'
        }
    });

    newList = list.filter(todoItem => todoItem.status !== 'done');

    doneAmount = list.reduce((acc, todoItem) => {
        if (todoItem.status === 'done') { acc++; }
        return acc
    }, 0);

    return { doneAmount, newList };
});

console.log(isCompletedTask(todoList));

