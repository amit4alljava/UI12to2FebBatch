window.addEventListener("DOMContentLoaded",init);
function init(){
    document.getElementById("add").addEventListener("click",doOperation);
    document.getElementById("subtract").addEventListener("click",doOperation);
}
function doOperation(event){
    var firstNumber = document.getElementById("firstNum").value;
    var secondNumber = document.getElementById("secondNum").value;
    //console.log("Event Happens ",event.srcElement.innerHTML);
    var buttonValue = event.srcElement.innerHTML;
    var result = 0;
    if(buttonValue=="Add"){
        result = add(firstNumber,secondNumber);
    }
    else
    if(buttonValue=="Subtract"){
        result = subtract(firstNumber,secondNumber);
    }
    document.getElementById("result").innerHTML=result;
}
function add(firstNumber,secondNumber){
    /*var firstNumber = document.getElementById("firstNum").value;
    var secondNumber = document.getElementById("secondNum").value;*/
    return parseInt(firstNumber) + parseInt(secondNumber);
    //document.getElementById("result").innerHTML=result;
}
function subtract(firstNumber,secondNumber){
    /*var firstNumber = document.getElementById("firstNum").value;
    var secondNumber = document.getElementById("secondNum").value;*/
    return  firstNumber - secondNumber;
    //document.getElementById("result").innerHTML=result;
}
