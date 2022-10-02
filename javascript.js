const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersEl.forEach(number => {
    //Create event listner for buttons
    number.addEventListener('click', (e)=> {
        //If the decimal has been placed, will not place another
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        //Adds the event.target (the button) inner text to variable
        dis2Num += e.target.innerText;
        //Displays variable in display2El
        display2El.innerHTML = dis2Num;
    })
})

operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = ''){
    dis1Num += dis2Num + ' ' +name + ' ';
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';
    tempResultEl.innerText = result;
}

function mathOperation() {
    if(lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '÷') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    } 
}



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