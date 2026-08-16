class BankAccount {

    constructor(name, balance) {

        this.name = name;
        this.balance = balance;

    }

    showBalance() {

        document.getElementById("message").innerText =
            "Your balance is $" + this.balance;

    }

    deposit(amount) {

        this.balance = this.balance + amount;

        document.getElementById("message").innerText =
            "$" + amount + " deposited successfully!";

    }

    withdraw(amount) {

        if (amount > this.balance) {

            document.getElementById("message").innerText =
                "Not enough money!";

            return;

        }

        this.balance = this.balance - amount;

        document.getElementById("message").innerText =
            "$" + amount + " withdrawn successfully!";

    }

}

let myAccount = new BankAccount("Hyper", 1000);

function depositMoney() {

    let amount = Number(
        document.getElementById("depositAmount").value
    );

    myAccount.deposit(amount);

}

function withdrawMoney() {

    let amount = Number(
        document.getElementById("withdrawAmount").value
    );

    myAccount.withdraw(amount);

}