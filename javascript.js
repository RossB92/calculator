


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