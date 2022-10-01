var runner=0;
let digit;

function add(runner) {
    console.log(runner);
    //take input from which button
    //is clicked on screen

    //add the numbers
}
document.querySelectorAll('button').forEach(el =>{
    el.addEventListener('click', () =>{
        digit_pressed(el.textContent);
    });
});
function digit_pressed(digit) {
    console.log("digit pressed: " + digit);
    getRunner(digit);
}
function getRunner(digit) {
    if (String(digit) === "+") {
        console.log('+: ' + digit)
    //these will be operand functions
    }  
    else if (String(digit) === "-") {
        console.log('-: ' + digit)
    //these will be operand functions
    }
    else if (String(digit) === "*") {
        console.log('*: ' + digit)
    //these will be operand functions
    }
    else if (String(digit) === "/") {
        console.log('/: ' + digit)
    //these will be operand functions
    }    
    else if (typeof Number(digit) === 'number') {
        runner = Number(digit);
        console.log('number runner: ' + runner);
        return runner;
    } 
    // else if (digit === "/") {
    //     console.log('+: ' + digit)
    // //these will be operand functions
    // }    
}
function test() {
    console.log('runner' + runner);
}
