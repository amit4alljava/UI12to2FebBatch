window.addEventListener("DOMContentLoaded",init);
function init(){
    document.getElementById("add")
        .addEventListener("click",doOperation);
    document.getElementById("subtract")
        .addEventListener("click",doOperation);
    document.getElementById("multiply")
        .addEventListener("click",doOperation);
    document.getElementById("divide")
        .addEventListener("click",doOperation);

}
function doOperation(event){
    //Step -1 Take Values
    var firstNumber = document.getElementById("firstNum").value;
    var secondNumber = document.getElementById("secondNum").value;
    //console.log("Event Happens ",event.srcElement.innerHTML);
    var buttonValue = event.srcElement.innerHTML;
    var result = 0;
    // Step -2 Call Model
    if(buttonValue=="Add"){
        result = add(firstNumber,secondNumber);
    }
    else
    if(buttonValue=="Subtract"){
        result = subtract(firstNumber,secondNumber);
    }
    // Send Result
    document.getElementById("result").innerHTML=result;
}

