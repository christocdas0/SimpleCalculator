let screen = document.querySelector(".screen");
let btn = document.querySelectorAll(".btn");
let clearBtn = document.querySelector(".c");
let equals = document.querySelector(".equalBtn");
let acBtn = document.querySelector(".ac");

clearBtn.addEventListener("click", () => {
  screen.value = "";
});

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let x = btn.value;
    let y = (screen.value += x);
  });
});
equals.addEventListener("click", () => {
  let y = screen.value;
  let clcValue = eval(y);
  screen.value = clcValue;
});

acBtn.addEventListener("click", () => {
  screen.value = "";
});
