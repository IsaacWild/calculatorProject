function add(a,b){
sum = a+b; 
}

function subtract(a,b){
sum = a-b; 
}

function multiply(a,b){
sum = a*b; 
}

function divide(a,b){
sum = a/b; 
}

function operate(num1,operator,num2){
if(operator == '+'){
    add(num1,num2);
}else if(operator == '-'){
    subtract(num1,num2);
}else if(operator == '*'){
    multiply(num1,num2);
}else if(operator == '/'){
    divide(num1,num2);
}else{
    console.log("something went wrong")
}

}

let num1 = null;
let num2 = null;
let operator = null;
let sum = null;
let chain = false;

const display = document.querySelector(".display");
const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");
const btn4 = document.querySelector("#button4");
const btn5 = document.querySelector("#button5");
const btn6 = document.querySelector("#button6");
const btn7 = document.querySelector("#button7");
const btn8 = document.querySelector("#button8");
const btn9 = document.querySelector("#button9");
const btn0 = document.querySelector("#button0");
const btnAdd = document.querySelector("#additionButton");
const btnSub = document.querySelector("#subtractButton");
const btnMult = document.querySelector("#multiplyButton");
const btnDiv = document.querySelector("#divideButton");
const btnEqual = document.querySelector("#equalsButton");
const btnClear = document.querySelector("#buttonClear");
const btnDot = document.querySelector("#buttonDot");

btn1.addEventListener("click", () => {
    if(sum !== null && chain == true)
    {
        display.textContent = "";
        updateDisplay(1);
        chain = false;
    }else
        updateDisplay(1);
});

btn2.addEventListener("click", () => {
    if(sum !== null && chain == true)
    {
        display.textContent = "";
        updateDisplay(2);
        chain = false;
    }else
        updateDisplay(2);   
});

btn3.addEventListener("click", () => {
    if(sum !== null && chain == true)
    {
        display.textContent = "";
        updateDisplay(3);
        chain = false;
    }else
        updateDisplay(3);
});

btn4.addEventListener("click", () => {
    if(sum !== null && chain == true)
    {
        display.textContent = "";
        updateDisplay(4);
        chain = false;
    }else
        updateDisplay(4);
});

btn5.addEventListener("click", () => {
    if(sum !== null && chain == true)
    {
        display.textContent = "";
        updateDisplay(5);
        chain = false;
    }else
        updateDisplay(5);
});

btn6.addEventListener("click", () => {
    if(sum !== null && chain == true)
    {
        display.textContent = "";
        updateDisplay(6);
        chain = false;
    }else
        updateDisplay(6);
});

btn7.addEventListener("click", () => {
    if(sum !== null && chain == true)
    {
        display.textContent = "";
        updateDisplay(7);
        chain = false;
    }else
        updateDisplay(7);
});

btn8.addEventListener("click", () => {
    if(sum !== null && chain == true)
    {
        display.textContent = "";
        updateDisplay(8);
        chain = false;
    }else
        updateDisplay(8);
});

btn9.addEventListener("click", () => {
    if(sum !== null && chain == true)
    {
        display.textContent = "";
        updateDisplay(9);
        chain = false;
    }else
        updateDisplay(9);
});

btn0.addEventListener("click", () => {
    if(sum !== null && chain == true)
    {
        display.textContent = "";
        updateDisplay(0);
        chain = false;
    }else
        updateDisplay(0);
});

btnAdd.addEventListener("click", () => {
    clearButtons();
    buttonSelected(btnAdd);
    if(operator !== null){
        chainCalc();
        operator = "+"
    }else if(operator == null){
        operator = "+"
        num1 = parseFloat(display.textContent)
        display.textContent = "";
    }
});

btnSub.addEventListener("click", () => {
    clearButtons();
    buttonSelected(btnSub);
    if(operator !== null){
        chainCalc();
        operator = "-"
    }else if(operator == null){
        operator = "-"
        num1 = parseFloat(display.textContent)
        display.textContent = "";
    }
});

btnMult.addEventListener("click", () => {
    clearButtons();
    buttonSelected(btnMult);
    if(operator !== null){
        chainCalc();
        operator = "*"
    }else if(operator == null){
        operator = "*"
        num1 = parseFloat(display.textContent)
        display.textContent = "";
    } 
});

btnDiv.addEventListener("click", () => {
    clearButtons();
    buttonSelected(btnDiv);
    if(operator !== null){
        chainCalc();
        operator = "/"
    }else if(operator == null){
    operator = "/"
    num1 = parseFloat(display.textContent)
    display.textContent = "";
}
});

btnEqual.addEventListener("click", () => {
        calc();
});

btnClear.addEventListener("click", () => {
    num1 = null;
    num2 = null;
    operator = null;
    sum = null;
    display.textContent = "";
    clearButtons();
});

btnDot.addEventListener("click", () => {
    updateDisplay(".");
    disableDot();
});

function updateDisplay(x) {0
    if(display.textContent.length < 14){
        display.textContent = display.textContent + x;
    }else
    return;
}

function calc() {
    num2 = parseFloat(display.textContent)
    if(num1 !== null || operator !== null || num2 !==null){
        operate(num1,operator,num2);
        if(sum == Infinity){
            display.textContent = "Very funny! Go do some real maths";
        }else
        display.textContent = sum;
        num1 = sum;
        num2 = null;
        operator = null;
        clearButtons();
        chain = true;
    }else
    return;
}
function chainCalc() {
    num2 = parseFloat(display.textContent)
    operate(num1,operator,num2);
    if(sum == Infinity){
        display.textContent = "Very funny! Go do some real maths";
    }else
    display.textContent = sum;
    num1 = sum;
    num2 = null;
    chain = true;
}

function clearButtons(){
    btnAdd.classList.remove("buttonSelected");
    btnAdd.classList.add("button");
    btnSub.classList.remove("buttonSelected");
    btnSub.classList.add("button");
    btnMult.classList.remove("buttonSelected");
    btnMult.classList.add("button");
    btnDiv.classList.remove("buttonSelected");
    btnDiv.classList.add("button");
    btnDot.classList.remove("buttonSelected")
    btnDot.classList.add("button")
    enableDot();
}

function buttonSelected(x){
    (x).classList.add("buttonSelected");
    (x).classList.remove("button");
}

function disableDot(){
    btnDot.disabled = true;
    btnDot.classList.add("buttonSelected")
    btnDot.classList.remove("button")
}

function enableDot(){
    btnDot.disabled = false;
}