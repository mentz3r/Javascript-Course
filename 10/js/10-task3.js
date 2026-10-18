let calculation = localStorage.getItem('calculation') || ''

displayCalcResult();

function updateCalculation(value) {
    calculation += value;
    console.log(calculation);

    localStorage.setItem('calculation', calculation);

    displayCalcResult()
}

function displayCalcResult() {
    document.querySelector('.js-calc-result')
        .innerHTML = `${calculation}`;
}