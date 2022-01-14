// initializer
let total = 0;
let operator;
// basic functions
const add = (input1, input2) => total = input1 + input2;
const subtract = (input1, input2) => total = input1 - input2;
const divide = (input1, input2) => total = input1 / input2;
const multiply = (input1, input2) => total = input1 * input2;
const operate = (operator, input1, input2) => {
    // need to tie operator to a button press
    if ( operator === plus ) { add(input1, input2) }
    else if ( operator === minus ) { subtract(input1, input2) }
    else if ( operator === division ) { divide(input1, input2) }
    else if ( operator === times ) { multiply(input1, input2) }
    else return; 
}

// gets all buttons
const buttons = document.querySelectorAll('button');

// adds click event to each button
buttons.forEach(function (i) {
    i.addEventListener('click', () => {
        if (!input1) {
        input1 = i.getAttribute('class');
        return input1;
        }
        else {
            input2 = i.getAttribute('class');
            return input2;
        }
    })
})




// add id or something to each html element
// add event listeners to each button w for loop looking for that id
// add corresponding id to display div when clicked
// create function that uses operate() by creating operator, input1, input2 and returning those values

const display = document.getElementById('display');

const displayValue; // running total to be displayed after pressing = or another operator
const input1;       // store number and set displayValue to that number
const operator;     // store operator to be used and update display
const input2;       // store number and set displayValue to that number
const equals;       // run operate(), update displayValue
const clear;        // sets display and displayValue to 0

const posneg;       // set displayValue to the opposite
const decimal;      // add decimal to displayValue
const percent;      // idk








// ***** FOR SPREAD OPERATOR CALCULATIONS ONLY *****

// const add = (...inputs) => {
    
//     for (let input of inputs) total += input;

//     return total;

// }

// const subtract = (...inputs) => {
   
//     // might need if/else statement. if this is first operator, initialize total. otherwise, do not

//     total += inputs[0]*2; // initialize total to twice the first input

//     for (let input of inputs) total -= input; // total = total - input

//     return total;

// }

// const divide = (...inputs) => {

//     total = inputs[0]**2; // initialize 

//     for (let input of inputs) total /= input; // total = total / input

//     return total;

// }

// const multiply = (...inputs) => {

//     total = 1;

//     for (let input of inputs) total *= input; /// total = total * input 

//     return total;

// }