const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');



// var runner;
// let digit;

// function add(addNum) {
//     let secondVal = document.querySelectorAll('button.num').forEach(el =>{
//         el.addEventListener('click', () =>{
//             getRunner(el.textContent);
//         });
//     });
//     addNum = runner;
//     console.log("add: runner " + runner)
//     console.log("add: 2nd value " + secondVal)


//     //take input from which button
//     //is clicked on screen

//     //add the numbers
// }

// //Add event listeners to numeral buttons
// document.querySelectorAll('button.num').forEach(el =>{
//     el.addEventListener('click', () =>{
//         getRunner(el.textContent);
//     });
// });

// function getRunner(digit) {
//     if (typeof Number(digit) === 'number') {
//         runner = Number(digit);
//     }  
//     console.log("num: runner " + runner)
//     document.getElementById("display-results").innerHTML = runner;
//     return runner;
// }
// function test() {
//     console.log('test: runner: ' + runner);
// }
// // Add eventListeners to operand buttons
// document.querySelectorAll('button.operand').forEach(el =>{
//     el.addEventListener('click', () =>{
//         useOperand(el.textContent);
//     });
// });
// function useOperand(operand) {
//     if (String(operand) === "+") {
//         runner = String(operand);
//         // runner=operand;
//         // add();
//     //these will be operand functions
//     }  
//     else if (String(operand) === "-") {
//         runner = String(operand);
//     //these will be operand functions
//     }
//     else if (String(operand) === "*") {
//         runner = String(operand);
//     //these will be operand functions
//     }
//     else if (String(operand) === "/") {
//         runner = String(operand);
//     //these will be operand functions
//     }
//     document.getElementById("display-results").innerHTML = runner;
// }