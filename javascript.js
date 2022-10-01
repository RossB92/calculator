var runner=0;
let digit;

function add(runner) {
    console.log(runner + secondVal)
    console.log("f")

    //take input from which button
    //is clicked on screen

    //add the numbers
}

//Add event listeners to numeral buttons
document.querySelectorAll('button.num').forEach(el =>{
    el.addEventListener('click', () =>{
        digit_pressed(el.textContent);
    });
});

function getRunner(digit) {
    if (typeof Number(digit) === 'number') {
        runner = Number(digit);
    }  
    document.getElementById("display-results").innerHTML = runner;
    return runner;


}
// Add eventListeners to operand buttons
document.querySelectorAll('button.operand').forEach(el =>{
    el.addEventListener('click', () =>{
        useOperand(el.textContent);
    });
});
function useOperand(operand) {
    if (String(operand) === "+") {
        runner = String(operand);
        // runner=operand;
        // add();
    //these will be operand functions
    }  
    else if (String(operand) === "-") {
        runner = String(operand);
    //these will be operand functions
    }
    else if (String(operand) === "*") {
        runner = String(operand);
    //these will be operand functions
    }
    else if (String(operand) === "/") {
        runner = String(operand);
    //these will be operand functions
    }
    document.getElementById("display-results").innerHTML = runner;
}