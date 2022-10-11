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
function mod (num1, num2){
    return num1 % num2;
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
    else if (operator === '%'){
        return mod(num1, num2);
    }
}

let num1 = 0;
let result = 0;
let num2 = 0;
let operator = '';
let newNum = false; 
let clickedOperator = false; 
let clickedEquals = false;
let clickedDecimal = true;

const text = document.querySelector('.text');
function handleClick (number){ //handleclick for most of the buttons
    if(newNum){ //if operator was clicked, then display needs to refresh and be the new input
        text.textContent = number;
        newNum = false;
    }
    else if(text.textContent === '0') text.textContent = number;
    else if (clickedEquals && !clickedOperator){ //check if number clicked right after equals, new calculation
        text.textContent = number;
        
        clickedEquals = false;
    }
    
    else text.textContent += number;
    num1 = parseFloat(text.textContent);
    
    
    
}

function operatorClick (op){
    if(clickedOperator){ //if operator already clicked and now clicked again, compute and display the result
        result = operate (operator, num2, num1);
        text.textContent = parseFloat((result).toFixed(10)); //limits number of decimals without trailing 0's
        num1 = 0;
        num2 = result;
        operator = op;
        newNum = true;
        
    }
    else{
        num2 = num1;
        num1 = 0;
        operator = op;
        newNum = true;
        clickedOperator = true;
        
    }
    
}

function equalsClick (){
    result = operate (operator, num2, num1);
    text.textContent = parseFloat((result).toFixed(10));
    num1 = result; //setting num1 = result so that further calculations can be done if an operator is pressed
    num2 = 0;
    clickedEquals = true;
    operator = '';
    clickedOperator = false;
    
    

    
}

function clearClick() {
    text.textContent = 0;
    num1 = 0;
    num2 = 0;
    clickedOperator = false;
    newNum = false;
    clickedEquals = false;
    operator = '';
   
}

function deleteClick(){
    if(newNum){ //reset if clicked right after operator
        text.textContent = "0";
        num1 = 0;
        num2 = 0;
        clickedOperator = false;
        newNum = false;
        operator = '';
    }
    if(text.textContent === '0') return;
    
    text.textContent = text.textContent.toString().slice(0, -1); //checking if last digit is decimal, if so remove 
    if(text.textContent.charAt(text.textContent.length -1) == '.'){
        text.textContent = text.textContent.toString().slice(0, -1);
    }
    if(text.textContent == ''){
        text.textContent = 0;
    }
    num1 = parseFloat(text.textContent);
}

function decimalClick(){
    if(text.textContent == 0){
        text.textContent = '0.';
    }
    else text.textContent += '.';
    
}