class Calculator {

    constructor() {
        this.startNewNumber = true;
        this.prevOperator = "+";
        this.prevEquals = false;
        this.prevNumber = 0;
        this.newNumber = 0;
        this.readout = document.getElementById("readout");
    }

    reset_calc() {
        this.readout.value = 0;
        this.startNewNumber = true;
        this.prevOperator = "+";
        this.prevEquals = false;
        this.prevNumber = 0;
        this.newNumber = 0;
    }

    input_digit(digit) {
        if (this.prevEquals) {
            this.reset_calc();
        }
        if (this.startNewNumber || this.readout.value == "0") {
            this.readout.value = "";
        }
        this.readout.value += digit;
        this.startNewNumber = false;
    }

    input_point() {
        if (this.prevEquals) {
            this.reset_calc();
        }
        if (this.readout.value.length == 0 || this.startNewNumber) {
            this.readout.value = 0;
        } else if (this.readout.value.indexOf(".") >= 0) {
            return;
        }
        this.readout.value += "."
        this.startNewNumber = false;
    }

    input_operator(operator) {
        if (!this.startNewNumber && !this.prevEquals) {
            this.calculate();
        }
        this.prevEquals = false;
        this.prevOperator = operator; 
        this.startNewNumber = true;
    }

    calculate() {
        if (!this.prevEquals) {
            this.newNumber = Number(this.readout.value);
        }
        switch (this.prevOperator) {
            case "+":
                this.prevNumber += this.newNumber;
                break;
            case "-":
                this.prevNumber -= this.newNumber;
                break;
            case "*":
                this.prevNumber *= this.newNumber;
                break;
            case "/":
                this.prevNumber /= this.newNumber;
                break;
        }
        this.readout.value = Number(this.prevNumber.toPrecision(12));  // Round without unnecessary zeroes
        this.prevEquals = true;
        this.startNewNumber = true;
    }

}

const calc = new Calculator();