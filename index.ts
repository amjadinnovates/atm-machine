#! usr/bin/env node
import inquirer from "inquirer";

// user database in form of array of objects

const users: { name: string; pinCode: number; balance: number }[] = [
  { name: "Alice", pinCode: 1234, balance: 1000 },
  { name: "Bob", pinCode: 5678, balance: 2000 },
  { name: "Charlie", pinCode: 9012, balance: 1500 },
];

// Main function
async function main() {
  const pinCodeInput = await inquirer.prompt([
    {
      type: "number",
      name: "pinCode",
      message: "Enter your PIN code:",
    },
  ]);

  const enteredPinCode = pinCodeInput.pinCode;

  const index = users.findIndex((user) => user.pinCode === enteredPinCode);
  if (index !== -1) {
    console.log(`User with pinCode ${enteredPinCode} found.`);
    const amountInput = await inquirer.prompt([
      {
        type: "number",
        name: "amount",
        message: "How much money do you want?",
      },
    ]);

    const requestedAmount = amountInput.amount;
    console.log(`You have withdrawn $${requestedAmount}.`);
    users[index].balance = users[index].balance - requestedAmount;
    console.log(`your balance is ${users[index].balance}`);
  } else {
    console.log(`User with pinCode ${enteredPinCode} not found`);
  }
}

main();
