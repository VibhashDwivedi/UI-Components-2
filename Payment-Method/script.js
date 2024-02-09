const myDiv = document.getElementById('myDiv');
const pay = document.getElementById('pay-btn1');
// add event listener to pseudo element card-pay:after
const cardPay = document.querySelector('.card-pay');
const myDiv2 = document.getElementById('myDiv2');
const cardPay2 = document.querySelector('.card-pay2');
//get form
const form = document.getElementById('form');



myDiv.addEventListener('click', function() {
    console.log('You clicked on pay by card option!');
    cardPay2.classList.remove('changed');
    // change display of pay-btn
    if (pay.style.display === 'none') {
        pay.style.display = 'block';
    } else {
        pay.style.display = 'none';
        //reset form
        form.reset();
    }
    

    if (cardPay.classList.contains('changed')) {
        cardPay.classList.remove('changed');
    } else {
        cardPay.classList.add('changed');
    }
}
);
myDiv2.addEventListener('click', function() {
    console.log('You chose to pay later!');
    // change display of pay-btn
    
    cardPay.classList.remove('changed');
    pay.style.display = 'none';
    form.reset();

    if (cardPay2.classList.contains('changed')) {
        cardPay2.classList.remove('changed');
    } else {
        cardPay2.classList.add('changed');
    }
}
);