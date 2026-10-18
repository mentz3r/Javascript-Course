function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}


function calculateTotal() {
    let value = Number(document.querySelector('.js-cost-input').value);

    let finalStroke = document.querySelector('.js-total-cost');

    if (value <= 0) {
        finalStroke.classList.add('invalid-str');
        finalStroke.innerHTML = 'Error: cost connot be lass then $0'
    } else if (value < 40) {
        finalStroke.innerHTML = '$' + (value + 10);
    } else {
        finalStroke.innerHTML = '$' + value;
    }
}