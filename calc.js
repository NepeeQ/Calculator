const digitsBtns = document.querySelectorAll(".digit");
const operationBtns = document.querySelectorAll(".operation");
const clearBtn = document.querySelector("#clear");
const delBtn = document.querySelector("#del");
const dotBtn = document.querySelector("#dot");
const equalBtn = document.querySelector("#equal");
const screen = document.querySelector("#screenContent");


let firstNumber = "";
let secondNumber = "";

let operationState = false; // false - no operation now (first digit typed), true - operation now (second digit typed)

let currentOperationType = {};

function updateScreen(val){

    screen.textContent = val;
 
}


for (let i = 0; i < digitsBtns.length; i++) {
    digitsBtns[i].addEventListener("click", function() {
        if(!operationState)
        {
            firstNumber += digitsBtns[i].textContent;
            updateScreen(firstNumber);
        }
        else{
            secondNumber += digitsBtns[i].textContent;
            updateScreen(secondNumber);
        };
    });
}

for (let i = 0; i < operationBtns.length; i++)
{
    operationBtns[i].addEventListener("click", function()
    {
        if (firstNumber.length != 0)
        {
            operationBtns[i].style.backgroundColor = "darkgray";
            currentOperationType = operationBtns[i];
            operationState = true;
        }
    })
}

clearBtn.addEventListener("click", clearCalc);

function clearCalc()
{
    if (!operationState)
    {
        firstNumber = "";
        screen.textContent = "";
    }
    else if(operationState && secondNumber != ""){
        secondNumber = "";
        screen.textContent = "";
    }
    else{
        firstNumber = "";
        screen.textContent = "";
        operationState = false;
        clearOperation();
    }
}

delBtn.addEventListener("click", deleteChar);

function deleteChar(){
    if (!operationState)
    {
        firstNumber = firstNumber.slice(0, -1);
        updateScreen(firstNumber);
        console.log("dfasdfsad")
    }
    else{
        secondNumber = secondNumber.slice(0, -1);
        updateScreen(secondNumber);
    }
}


equalBtn.addEventListener("click", evaluate)

function evaluate(){

    if (currentOperationType.name == "div")
    {
        firstNumber = divide(Number(firstNumber), Number(secondNumber));
        updateScreen(firstNumber)
        secondNumber = "";
        clearOperation();
    }
    else if (currentOperationType.name == "multiply")
    {
        firstNumber = multiply(Number(firstNumber), Number(secondNumber));
        updateScreen(firstNumber);
        secondNumber = "";
        clearOperation();
    }
    else if(currentOperationType.name == "minus")
    {
        firstNumber = substract(Number(firstNumber), Number(secondNumber));
        updateScreen(firstNumber);
        secondNumber = "";
        clearOperation();
    }
    else if(currentOperationType.name == "plus")
    {
        firstNumber = add(Number(firstNumber), Number(secondNumber));
        updateScreen(firstNumber);
        secondNumber = "";
        clearOperation();
    }
}

function divide(num1, num2){
    if(num2 != 0)
    {
        return Math.round((num1 / num2) * 100) / 100
    }
    else 
    {
        updateScreen("Can't divide by 0!")
    }
}

function multiply(num1, num2){

    return num1 * num2;
}

function substract(num1, num2)
{
    return num1 - num2;
}
 function add(num1, num2)
 {
    return num1 + num2;
 }

 function clearOperation()
 {
    currentOperationType.style.backgroundColor = "white" // change to correct
    currentOperationType = {};
 }