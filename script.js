let total = 0;
let runningTotal = 0;

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