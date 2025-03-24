const display = document.getElementById("display");

function valueOfNumber(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "") {
    display.innerText = "0";
  }
}

function calculateResult() {
  try {
    display.innerText = eval(
      display.innerText.replace("×", "*").replace("÷", "/")
    );
  } catch {
    display.innerText = "Error";
  }
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.innerText;

    if (value === "AC") {
      clearDisplay();
    } else if (value === "DEL") {
      deleteLast();
    } else if (value === "=") {
      calculateResult();
    } else {
      appendValue(value);
    }
  });
});
