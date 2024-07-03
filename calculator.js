function reset_calc() {
    readout.value = 0;
    startNewNumber = true;
    prevOperator = "+";
    prevEquals = false;
    prevNumber = 0;
    newNumber = 0;
}

function input_digit(digit) {
    if (prevEquals) {
        reset_calc();
    }
    if (startNewNumber || readout.value == "0") {
        readout.value = "";
    }
    readout.value += digit;
    startNewNumber = false;
}

function input_point() {
    if (prevEquals) {
        reset_calc();
    }
    if (readout.value.length == 0 || startNewNumber) {
        readout.value = 0;
    } else if (readout.value.indexOf(".") >= 0) {
        return;
    }
    readout.value += "."
    startNewNumber = false;
}

function input_operator(operator) {
    if (!startNewNumber && !prevEquals) {
        calculate();
    }
    prevEquals = false;
    prevOperator = operator; 
    startNewNumber = true;
}

function calculate() {
    if (!prevEquals) {
        newNumber = Number(readout.value);
    }
    switch (prevOperator) {
        case "+":
            prevNumber += newNumber;
            break;
        case "-":
            prevNumber -= newNumber;
            break;
        case "*":
            prevNumber *= newNumber;
            break;
        case "/":
            prevNumber /= newNumber;
            break;
    }
    readout.value = Number(prevNumber.toPrecision(12));  // Round without unnecessary zeroes
    prevEquals = true;
    startNewNumber = true;
}

/* I'd usually avoid global variables, but since we haven't
   covered classes in JS yet I've resorted to them here. */
let startNewNumber = true;
let prevOperator = "+";
let prevEquals = false;
let prevNumber = 0;
let newNumber = 0;
let readout = document.getElementById("readout");