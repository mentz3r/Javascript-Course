// 10c
const button = document.querySelector('.js-btn');
console.log(button.classList.contains('js-btn'));

// 10d

function game(selector) {

    const button = document.querySelector(`.${selector}`);

    if (!button.classList.contains('is-toggled')) {
        check();
        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
    }

}

function check() {
    const prevButton = document.querySelector('.is-toggled');

    if (prevButton) {
        prevButton.classList.remove('is-toggled')
    }
}