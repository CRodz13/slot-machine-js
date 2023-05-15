// 1. Deposit some money
// 2. Determine number of lines to be on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings or take losses
// 7. Play again

// Pre ES6
/*function deposit() {
    return 1
}

const x = deposit()*/

// ES6 function for deposit function call
const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
        return numberDepositAmount;
    }
  }
};

//Start of Step 2
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
          console.log("Invalid number of lines, try again");
        } else {
            return numberOfLines;
        }
      }
}

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
