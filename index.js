const cmBox = document.querySelector("#cmBox");
const textInput = document.querySelector("#textInput");

function handleSubmit(event) {
  cm = textInput.value;
  cmBox.style.width = `${cm}cm`;
  cmBox.style.height = `${cm}cm`;
}

textInput.addEventListener("input", handleSubmit)
