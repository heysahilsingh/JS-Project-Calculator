const resultTop = document.querySelector(".result .top");
const resultBottom = document.querySelector(".result .bottom");
const btnResult = document.querySelector(".buttons .get-result");
const btnClear = document.querySelector(".buttons .clear");
const btnUndo = document.querySelector(".buttons .undo");
const btn = document.querySelectorAll(".buttons .button");
const btnDivide = document.querySelector(".buttons .divide");
const btnMultiply = document.querySelector(".buttons .multiply");
const btnMinus = document.querySelector(".buttons .minus");
const btnPlus = document.querySelector(".buttons .plus");



let resultVar = "0";

btnClear.addEventListener("click", () => {
    [resultTop, resultBottom].forEach((e) => {
        e.textContent = "0";
    });
    resultVar = 0;
})

btnUndo.addEventListener("click", () => {
    if (resultBottom.textContent.length > 1) {
        resultBottom.textContent = resultBottom.textContent.slice(0, -1);
        resultVar = resultVar.toString().slice(0, -1);
    } else {
        resultBottom.textContent = "0";
        resultVar = 0;
    }
})


btnDivide.addEventListener("click", () => {
    resultBottom.textContent += " ÷ ";
    resultVar += "/"
})

btnMultiply.addEventListener("click", () => {
    resultBottom.textContent += " × ";
    resultVar += "*"
})

btnMinus.addEventListener("click", () => {
    resultBottom.textContent += " - ";
    resultVar += "-"
})

btnPlus.addEventListener("click", () => {
    resultBottom.textContent += " + ";
    resultVar += "+"
})

btn.forEach((button) => {
  button.addEventListener("click", () => {
    if(resultBottom.textContent == "0" || resultBottom.textContent == ""){
      resultBottom.textContent = button.textContent;
      resultVar = button.textContent;
    } else {
    resultBottom.textContent += button.textContent;
    resultVar += button.textContent;}
  })
})


btnResult.addEventListener("click", () => {
    resultTop.textContent = resultBottom.textContent
    let result = eval(resultVar);
    resultBottom.textContent = result.toLocaleString();
    resultVar = result;
});


document.addEventListener("click", () => {
  console.log(resultVar)
})


// Add support for keyboard input
document.addEventListener("keypress", (event) => {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        // If a numeric key is pressed, find the corresponding button and click it
        const button = document.querySelector(`.buttons .button[value="${key}"]`);
        if (button) {
            button.click();
        }
    } else if (key === "+") {
        btnPlus.click();
    } else if (key === "-") {
        btnMinus.click();
    } else if (key === "*") {
        btnMultiply.click();
    } else if (key === "/") {
        btnDivide.click();
    } else if (key === "Enter") {
        btnResult.click();
    } else if (key === "Escape") {
        btnUndo.click();
    } else if (key === "Backspace") {
        btnUndo.click();
    }
});
