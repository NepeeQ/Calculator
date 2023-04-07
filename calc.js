const digitsBtns = document.querySelectorAll(".digit");
const operationBtns = document.querySelectorAll(".operation");
const clearBtn = document.querySelector("#clear");
const delBtn = document.querySelector("#del");
const dotBtn = document.querySelector("#dot");
const equalBtn = document.querySelector("#equal");
const screen = document.querySelector("#screenContent");


let firstNumber = [];
let secondNumber = [];

let operationState = false; // false - no operation now (first digit typed), true - operation now (second digit typed)


function updateScreen(val){

    screen.textContent += val.at(-1);
 
}


for (let i = 0; i < digitsBtns.length; i++) {
    digitsBtns[i].addEventListener("click", function() {
        if(!operationState)
        {
            firstNumber.push(digitsBtns[i].textContent)
            updateScreen(firstNumber)
        }
        else{
            secondNumber.push(digitsBtns[i].textContent);
        };
    });
}