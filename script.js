function add (num1, num2){
    return num1 + num2;
}
function subtract (num1, num2){
    return num1 - num2;
}
function multiply (num1, num2){
    return num1 * num2;
}
function divide (num1, num2){
    return num1 / num2;
}

function operate (operator, num1, num2){
    if(operator === '+'){
        return add(num1, num2);
    }
    else if(operator === '-'){
        return subtract(num1, num2);
    }
    else if(operator === '*'){
        return multiply(num1, num2);
    }
    else if (operator === '/'){
        return divide(num1, num2);
    }
}
const text = document.querySelector('.text');
function handleClick (number){ //handleclick for most of the buttons
    if(text.textContent === '0') text.textContent = number;
    else text.textContent += number;
    
}

const clear = document.querySelector('.clear') //handlclick for clearing display
clear.addEventListener ('click', ()=>{
    text.textContent = "0";
})