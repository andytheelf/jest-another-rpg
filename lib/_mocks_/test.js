// =============================================================
// PART 1

function MiniBank(balance) {
    this.balance = balance;
    (this.getBalance = function() {
        return this.balance;
    }),
    // Add a `setBalance()` function
    // YOUR CODE HERE
    //
    (this.setBalance = function(value) {
        this.balance = value;
    }),
    // Add a `deposit()` function
    (this.deposit = function(value) {
        // Bonus code
        if (typeof value !== 'number' || value <= 0) {
            throw new Error("'value' must be a positive number!");
        }
        let newBalance = this.getBalance() + value;
        this.setBalance(newBalance);
        console.log(`Deposited ${value}!`);
    }),
    // Add a `withdraw()` function
    (this.withdraw = function(value) {
        // Bonus code
        if (typeof value !== 'number' || value <= 0) {
            throw new Error("'value' must be a positive number");
        }
        let newBalance = this.getBalance() - value;
        // Bonus code
        if (newBalance < 0) {
            throw new Error('Insufficient funds for this transaction');
        }
        this.setBalance(newBalance);
        console.log(`Withdrew ${value}!`);
    }),
    (this.printBalance = function() {
        console.log(`Balance: ${this.getBalance()}`);
    });
}

// =============================================================
// PART 2

// Create a new `bank` object

// Print the `bank` balance

// Deposit some money and then print the `bank` balance

// Withdraw some money and then print the `bank` balance