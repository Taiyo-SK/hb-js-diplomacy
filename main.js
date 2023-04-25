'use strict';


// 1. turn select buttons red
// ---elements with class "color-change" have "red" class added to them
const redButton = document.querySelector('.color-changer');

function changeColor () {
    const turnRedEles = document.querySelectorAll('.color-change');
    
    for (const el of turnRedEles) {
        el.classList.add('red');
    }
}

redButton.addEventListener('click', changeColor);

/*
2.form submission
---prevent default behavior
---validate input text with ID "number-input"
---if NaN or >= 10, change text of the element with ID "formFeedback"
to say 'Please enter a smaller number.'
Otherwise, change the text of that element to say "You're good to go."
*/

/* Order of Actions
---declare variable for the form HTMLElement with class number-form
---evt.preventDefault()
---event handler for validating input text, '#number-input'

*/

function validateNumber(evt) {
    evt.preventDefault();
    const numInput = document.querySelector('#number-input');
    const validNum = Number(numInput.value);

    const formFeedback = document.querySelector('#formFeedback');

    if (numInput >= 10 || isNaN(numInput)) {
        formFeedback.innerHTML = 'Please input a smaller number.';
    } else {
        formFeedback.innerHTML = 'Looks good!';
    }
}

document.querySelector('.number-form').addEventListener('submit', validateNumber);

// const numForm = document.querySelector('.number-form');



// numForm.addEventListener('submit', (evt) => {

//     if (numInput >= 10 || isNan(numInput)) {
//         evt.preventDefault();
//         formFeedback.innerText = 'Please input a smaller number.';
//     } else {
//         formFeedback.innerText = 'You are good to go!';
//     }
// } )