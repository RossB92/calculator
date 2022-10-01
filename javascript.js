function add(a,b) {
    
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
        return digit;
    }