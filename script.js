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
// need to add in DOM stuff to interact with buttons.
let num1 = null;
let num2 = null;
let operator = null;
let sum = null;

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

//add event listener
btn1.addEventListener("click", () => {
if(sum !== null)
{
//add toggle in here to allow multiple numbers in chaining calcs
display.textContent = "";
updateDisplay(1);
}
updateDisplay(1);
});
btn2.addEventListener("click", () => {
if(sum !== null)
{
display.textContent = "";
updateDisplay(2);
}else
updateDisplay(2);
});
btn3.addEventListener("click", () => {
if(sum !== null)
{
display.textContent = "";
updateDisplay(3);
}else
updateDisplay(3);
});
btn4.addEventListener("click", () => {
if(sum !== null)
{
display.textContent = "";
updateDisplay(4);
}else
updateDisplay(4);
});
btn5.addEventListener("click", () => {
if(sum !== null)
{
display.textContent = "";
updateDisplay(5);
}else
updateDisplay(5);
});
btn6.addEventListener("click", () => {
if(sum !== null)
{
display.textContent = "";
updateDisplay(6);
}else
updateDisplay(6);
});
btn7.addEventListener("click", () => {
if(sum !== null)
{
display.textContent = "";
updateDisplay(7);
}else
updateDisplay(7);
});
btn8.addEventListener("click", () => {
if(sum !== null)
{
display.textContent = "";
updateDisplay(8);
}else
updateDisplay(8);
});
btn9.addEventListener("click", () => {
if(sum !== null)
{
display.textContent = "";
updateDisplay(9);
}else
updateDisplay(9);
});
btn0.addEventListener("click", () => {
if(sum !== null)
{
display.textContent = "";
updateDisplay(0);
}else
updateDisplay(0);
});
btnAdd.addEventListener("click", () => {
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
});
btnDot.addEventListener("click", () => {
updateDisplay(".");
});

function updateDisplay(x) {0
if(display.textContent.length < 14){
display.textContent = display.textContent + x;
}else
return;
}

function calc() {
num2 = parseFloat(display.textContent)
if(num1 !== null && operator !== null && num2 !==null){
operate(num1,operator,num2);
display.textContent = sum;
num1 = sum;
num2 = null;
operator = null;
}else
return;
}
function chainCalc() {
num2 = parseFloat(display.textContent)
operate(num1,operator,num2);
display.textContent = sum;
num1 = sum;
num2 = null;

}