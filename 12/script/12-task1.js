// 12a
const add = function () {
    console.log(2 + 3);
};

add();
add();

// 12b

function runTwice(fun) {
    fun();
    fun();
}

runTwice(function () {
    console.log('12b');
})

runTwice(add);

// 12c

// function changeButton() {

//     const changeInner = function() {
//         document.querySelector('.js__btn')
//             .innerHTML = 'Finished!'
//     };

//     setTimeout(changeInner, 1000);
// }

// 12d

function changeButton() {

    const button = document.querySelector('.js__btn');

    button.innerHTML = 'Loading...';

    const changeInner = function () {
        button.innerHTML = 'Finished!'
    };

    setTimeout(changeInner, 1000);
}

// 12e

// function updateCartStatus() {

//     const statusText = document.querySelector('.js__text');
//     statusText.innerHTML = 'Added';

//     const changeInnerText = function() {
//         statusText.innerHTML = ''
//     };

//     setTimeout(changeInnerText, 2000);
// }

// 12f

let timeOutId;

function updateCartStatus() {

    const cartStatusText = document.querySelector('.js__text');
    cartStatusText.innerHTML = 'Added';

    clearTimeout(timeOutId);

    const changeInnerText = function () {
        cartStatusText.innerHTML = ''
    };

    timeOutId = setTimeout(changeInnerText, 2000);


}

// 12g

// setInterval(function() {
//     if (document.title === 'Document') {
//         document.title = '(2) New messages!';
//     } else {
//         document.title = 'Document';
//     }
// }, 1000);

// 12h-12i

let messages = 0;
let statusQuantity = false;
let timeoutID;

function updateMessages(action) {

    if (action === 'add') {
        messages += 1;
        statusQuantity = true;
    } else {
        messages -= 1
        if (messages <= 0) {
            statusQuantity = false
        }
    }

    clearTimeout(timeoutID)

    if (statusQuantity) {
        timeoutID = setInterval(function () {
        
        if (document.title === 'Document') {
            document.title = `(${messages}) New messages!`;
        } else {
            document.title = 'Document';
        }
    }, 1000);
    } else {
        document.title = 'Document';
    }

}




