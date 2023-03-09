const display = document.querySelector("input[type='text']");
const buttons = document.querySelectorAll("input[type='button']");



buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.value === "AC") {
            display.value = "";
        } else if (e.target.value === "√") {
            display.value = 'Math.sqrt(';
        } else if (e.target.value === "=") {
            if (display.value) display.value = eval(display.value);
        } else if (e.target.value === "Del") {
            if (display.value) display.value = display.value.slice(0, -1);
        } else {
            display.value += e.target.value;
        }
    });
});