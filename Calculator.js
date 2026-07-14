// --- State Management ---
let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
let isShowingAnswer = false;

const screenCurrent = document.getElementById("screen-current");
const screenHistory = document.getElementById("screen-history");

// --- Core Routing Router ---
function handleButtonClick(value) {
  if (!isNaN(parseInt(value)) || value === ".") {
    handleNumberOrDecimal(value);
  } else {
    handleSymbol(value);
  }
  rerender();
}

// --- Digit & Floating-Point Input Transformer ---
function handleNumberOrDecimal(inputString) {
  if (isShowingAnswer) {
    buffer = inputString === "." ? "0." : inputString;
    isShowingAnswer = false;
    return;
  }

  if (inputString === ".") {
    if (!buffer.includes(".")) {
      buffer += ".";
    }
  } else {
    if (buffer === "0") {
      buffer = inputString;
    } else {
      buffer += inputString;
    }
  }
}

// --- Operator & Action Processing Pipeline ---
function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      runningTotal = 0;
      buffer = "0";
      previousOperator = null;
      isShowingAnswer = false;
      break;
    case "=":
      if (previousOperator === null) return;

      const currentInput = parseFloat(buffer);
      screenHistory.textContent = `${runningTotal} ${previousOperator} ${currentInput} =`;

      flushOperation(currentInput);
      previousOperator = null;

      buffer = "" + parseFloat(runningTotal.toFixed(8));
      runningTotal = 0;
      isShowingAnswer = true;
      break;
    case "←":
      if (isShowingAnswer) return;
      if (buffer.length === 1 || buffer === "0.") {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}

// --- Mathematical Staging Handler ---
function handleMath(symbol) {
  const floatBuffer = parseFloat(buffer);

  if (runningTotal === 0 && buffer === "0") return;

  if (runningTotal === 0) {
    runningTotal = floatBuffer;
  } else if (!isShowingAnswer) {
    flushOperation(floatBuffer);
  }

  previousOperator = symbol;
  screenHistory.textContent = `${parseFloat(runningTotal.toFixed(8))} ${previousOperator}`;
  buffer = "0";
  isShowingAnswer = false;
}

// --- Execution Calculation Engine ---
function flushOperation(floatBuffer) {
  if (previousOperator === "+") {
    runningTotal += floatBuffer;
  } else if (previousOperator === "−") {
    runningTotal -= floatBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= floatBuffer;
  } else if (previousOperator === "÷") {
    if (floatBuffer === 0) {
      runningTotal = 0;
      return;
    }
    runningTotal /= floatBuffer;
  }
}

// --- DOM Target Repaint Mutation ---
function rerender() {
  screenCurrent.textContent = buffer;
  if (previousOperator === null && !isShowingAnswer) {
    screenHistory.textContent = "";
  }
}

// --- Master Event Delegation Subroutine ---
document
  .querySelector(".button-grid")
  .addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") return;
    handleButtonClick(event.target.textContent);
  });
