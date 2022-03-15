function add(a,b){
    console.log(a+b); 
}

function subtract(a,b){
    console.log(a-b); 
}

function multiply(a,b){
    console.log(a*b); 
}

function divide(a,b){
    console.log(a/b); 
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