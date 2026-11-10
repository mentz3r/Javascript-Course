let calculation =  JSON.parse(localStorage.getItem('calculation')) || '';

renderCalculation();

function updateCalculation(button) {
    const value = button.textContent;

    if (value === 'C' ) {
        calculation = '';
    } else if (value === '=') { 
        calculation = eval(calculation);
    } else if (value == Number(value) || value === '.') {
        calculation += value;
    } else {
        calculation += ` ${value} `;
    }

    renderCalculation();

    localStorage.setItem('calculation', JSON.stringify(calculation))

}

function renderCalculation() {
    document.querySelector('.js__calc__result').value = calculation;
}

document.querySelectorAll('.calculation__btn')
    .forEach(button => {
        button.addEventListener('click', () => {
            updateCalculation(button);
        });
    })