// selector
const displayColor = document.getElementById("display-color");
const randomBtn = document.getElementById("random-btn");
const copyBtn = document.getElementById("copy-btn");
const hexCode = document.getElementById("hex-code-field");
const rgbCode = document.getElementById("rgb-code-field");
const rgbRed = document.getElementById("rgb-red");
const rgbGreen = document.getElementById("rgb-green");
const rgbBlue = document.getElementById("rgb-blue");
const redLebel = document.getElementById("red-lebel");
const greenLebel = document.getElementById("green-lebel");
const blueLebel = document.getElementById("blue-lebel");
const colorMode = document.getElementsByName("color-mode");

let redValue = rgbRed.value;
let redNum = parseInt(redValue);
let greenValue = rgbGreen.value;
let greenNum = parseInt(greenValue);
let blueValue = rgbBlue.value;
let blueNum = parseInt(blueValue);

// random color
randomBtn.addEventListener("click", function () {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  displayColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  hexCode.value = `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`;
  rgbCode.value = `rgb(${red}, ${green}, ${blue})`;
});

// rgb slider
rgbRed.addEventListener("change", function () {
  redValue = rgbRed.value;
  redLebel.innerText = redValue;
  redNum = parseInt(redValue);
  hexCode.value = `#${redNum.toString(16)}${greenNum.toString(
    16
  )}${blueNum.toString(16)}`;
  rgbCode.value = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  displayColor.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
});
rgbGreen.addEventListener("change", function () {
  greenValue = rgbGreen.value;
  greenNum = parseInt(greenValue);
  greenLebel.innerText = greenValue;
  rgbCode.value = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  hexCode.value = `#${redNum.toString(16)}${greenNum.toString(
    16
  )}${blueNum.toString(16)}`;
  displayColor.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
});
rgbBlue.addEventListener("change", function () {
  blueValue = rgbBlue.value;
  blueNum = parseInt(blueValue);
  blueLebel.innerText = blueValue;
  rgbCode.value = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  hexCode.value = `#${redNum.toString(16)}${greenNum.toString(
    16
  )}${blueNum.toString(16)}`;
  displayColor.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
});

// color mode and copy color code
copyBtn.addEventListener("click", function () {
  for (const mode of colorMode) {
    if (mode.checked) {
      if (mode.value === "hex") {
        navigator.clipboard.writeText(hexCode.value);
        toastMessage(`${hexCode.value} Copied`);
      } else if (mode.value === "rgb") {
        navigator.clipboard.writeText(rgbCode.value);
        toastMessage(`${rgbCode.value} Copied`);
      }
    }
  }
});

// toast message
const div = document.createElement("div");
function toastMessage(msg) {
  div.innerText = msg;
  div.className = "toast-message";
  document.body.appendChild(div);
}
copyBtn.addEventListener("mouseout", function () {
  div.classList.add("slide-out");
  document.body.removeChild(div);
});
