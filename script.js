let equationValue = "";
let numToEvalValue = "";

// DOM elements
equation = document.querySelector(".equation");
numToEval = document.querySelector(".numToEval");

calNumber = document.querySelectorAll(".calNumber");
calNumber = [...calNumber];
calNumber.forEach((element) => {
  element.addEventListener("click", () => {
    calNumberToEval(element);
  });
});
function calNumberToEval(elem) {
  
  numToEvalValue += elem.getAttribute("data-value");
  console.log(numToEvalValue);
  numToEval.innerHTML = numToEvalValue;
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
  return a / b;
}
function pow(a, b) {
  return Math.pow(a, b);
}
function sqrt(a) {
  return Math.sqrt(a);
}
