function inputDigit(digit) {
    if (newNumber) {
        readout.value = digit;
        newNumber = false;
    } else {
        readout.value += digit;
    }
}

let newNumber = false;
let readout = document.getElementById("readout");