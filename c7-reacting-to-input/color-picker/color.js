const colorPicker = document.querySelector("#color-picker");
const colorBox = document.querySelector(".color-box");

function changeColor() {
    const colorText = colorPicker.value;
    colorBox.style.backgroundColor = colorText;
    colorBox.innerText = colorText;

    const reportedColor = colorBox.style.backgroundColor;
    if(reportedColor !== colorText) {
        colorBox.classList.add("invalid")
        colorBox.style.backgroundColor = "white";
    } else {
        colorBox.classList.remove("invalid")
    }
}