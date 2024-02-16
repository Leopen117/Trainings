const box = document.getElementById("variableBox");
const textarea = document.getElementById("cssBorderStyleCode");

box.style.borderTopLeftRadius = 10 + "%";
box.style.borderTopRightRadius = 10 + "%";
box.style.borderBottomLeftRadius = 10 + "%";
box.style.borderBottomRightRadius = 10 + "%";

window.onload = changeTextareaValue;

function changeTextareaValue() {
  textarea.value = `border-radius: ${box.style.borderTopLeftRadius} ${box.style.borderTopRightRadius} ${box.style.borderBottomLeftRadius} ${box.style.borderBottomRightRadius};`;
}

function changeCurveLeftTop(e) {
  box.style.borderTopLeftRadius = e.target.value + "%";
  changeTextareaValue();
}
document
  .getElementById("curveLeftTop")
  .addEventListener("input", changeCurveLeftTop);

function changeCurveRightTop(e) {
  box.style.borderTopRightRadius = e.target.value + "%";
  changeTextareaValue();
}
document
  .getElementById("curveRightTop")
  .addEventListener("input", changeCurveRightTop);

function changeCurveLeftBottom(e) {
  box.style.borderBottomLeftRadius = `${e.target.value}%`;
  changeTextareaValue();
}
document
  .getElementById("curveLeftBottom")
  .addEventListener("input", changeCurveLeftBottom);

function changeCurveRightBottom(e) {
  box.style.borderBottomRightRadius = `${e.target.value}%`;
  changeTextareaValue();
}
document
  .getElementById("curveRightBottom")
  .addEventListener("input", changeCurveRightBottom);
