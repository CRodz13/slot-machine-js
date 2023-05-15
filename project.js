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

const depositAmount = deposit();
console.log(depositAmount)
