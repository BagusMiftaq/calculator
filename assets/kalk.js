const calculator = {
    displayNumber: '0',
    operator : null,
    firsNumber : null,
    waitingForSecondNumber : false
};

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firsNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    calculator.displayNumber += digit;
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function(event) {
        // menampilkan halaman yang di klik
        const target = event.target;

        inputDigit(target.innerText);
        updateDisplay();

    });
}