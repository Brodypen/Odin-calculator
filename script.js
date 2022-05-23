let equationValue = "";
let numToEvalValue = "0";
let SecnumToEvalValue = "0";
let operation = "";
let notValid = false;
// DOM elements
equation = document.querySelector(".equation");
numToEval = document.querySelector(".numToEval");
clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  clear();
});
calNumber = document.querySelectorAll(".calNumber");
calNumber = [...calNumber];
calNumber.forEach((element) => {
  element.addEventListener("click", () => {
    calNumberToEval(element);
  });
});

operator = document.querySelectorAll(".operator");
operator = [...operator];
operator.forEach((element) => {
  element.addEventListener("click", () => {
    operatorToEval(element);
  });
});
function backspace(){
  if(numToEvalValue.length > 1){
  numToEvalValue = numToEvalValue.substring(0,numToEvalValue.length - 1);
  display();  
  } else {
    numToEvalValue = "0";
    display();
  }

}
function calNumberToEval(elem) {
  if (elem.getAttribute("data-value") === "." && numToEvalValue.includes("."))
    return;
  if (numToEvalValue === "0") {
    numToEvalValue = elem.getAttribute("data-value");
  } else {
    numToEvalValue += elem.getAttribute("data-value");
  }
  display();
}
function operatorToEval(elem) {
  if (numToEvalValue !== ".") {
    if (operation === "") {
      operation = elem.getAttribute("data-value");
      if(operation === "switch"){
        switchSigns();
        operation = "";
      } else{
      
      SecnumToEvalValue = numToEvalValue;
      numToEvalValue = "0";
      }
      display();
    } else {
      calculate();
      operatorToEval(elem);
    }
  }
}
function switchSigns(){
  numToEvalValue = -1 * parseFloat(numToEvalValue);
}
function calculate() {
  let ans;
  const prev = parseFloat(SecnumToEvalValue);
  const current = parseFloat(numToEvalValue);
  if (isNaN(prev) || isNaN(current) || operation == '') return;
  switch (operation) {
    case "+":
      ans = add(prev, current);
      break;

    case "-":
      ans = minus(prev, current);
      break;
    case "*":
      ans = multiply(prev, current);
      break;
    case "÷":
      ans = divide(prev, current);
      break;
    case "^":
      ans = pow(prev, current);
      break;
  }
  SecnumToEvalValue += " " + operation + " " + numToEvalValue + " =";
  numToEvalValue = ans;
  operation = "";
  display();
}
function display() {
  numToEval.innerHTML = numToEvalValue;
  equation.innerHTML = SecnumToEvalValue + " " + operation;
}
function clear() {
  if (numToEvalValue != "0") {
    numToEvalValue = "0";
    display();
    return;
  }
  operation = "";
  SecnumToEvalValue = "0";
  display();
}

// All functions for calcualting
function add(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if(b === 0){
    return "ERORR!";
  }
  return a / b;
}
function pow(a, b) {
  return Math.pow(a, b);
}
