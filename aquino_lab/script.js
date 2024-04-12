let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = "";
}

function changeSign() {
  if (currentNumber !== "") {
    currentNumber == -1;
    document.getElementById("display").value = currentNumber;
  }
}

function operate(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
  }
}

function calculate() {
  let result = "";
  if (operator === "+") {
    result = parseFloat(previousNumber) + parseFloat(currentNumber);
  } else if (operator === "-") {
    result = parseFloat(previousNumber) - parseFloat(currentNumber);
  } else if (operator === "*") {
    result = parseFloat(previousNumber) * parseFloat(currentNumber);
  } else if (operator === "/") {
    if (currentNumber === "0") {
      alert("Division by zero error!");
      return;
    }
    result = parseFloat(previousNumber) / parseFloat(currentNumber);
  }
  currentNumber = result;
} 