const screen = document.getElementById("screen");
let currentInput = "";
let expression = "";
let operator = "";

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    const value = button.getAttribute("data-value");

    if (value) {
      currentInput += value;
      screen.value = currentInput; // Display current input
    }

    if (action) {
      if (action === "clear") {
        currentInput = "";
        expression = "";
        screen.value = "";
      } else if (action === "delete") {
        currentInput = currentInput.slice(0, -1);
        screen.value = currentInput;
      } else if (["add", "subtract", "multiply", "divide"].includes(action)) {
        if (currentInput) {
          expression += currentInput;
          operator = convertOperator(action);
          expression += operator;
          currentInput = "";
          screen.value = expression; // Display expression with operator
        }
      } else if (action === "calculate") {
        if (currentInput) {
          expression += currentInput;
          const result = eval(expression); // Calculate expression
          screen.value = result;
          currentInput = result.toString();
          expression = "";
        }
      }
    }
  });
});

function convertOperator(action) {
  switch (action) {
    case "add":
      return "+";
    case "subtract":
      return "-";
    case "multiply":
      return "*";
    case "divide":
      return "/";
    default:
      return "";
  }
}
