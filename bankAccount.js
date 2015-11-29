var bankAccount = { owner: "Manny",
                    type: "Savings",
                    balance: 100,
                    widthdraw: function(amount){
                        this.balance -= amount; // this.balance - amount;
                    },
                    deposit: function(amount) {
                        this.balance += amount;
                    }
}
//Creating a constructor in order to create more accounts
function BankAccount(owner, type) {
    this.owner = owner;
    this.type = type;
    this.balance = 0;

    this.widthdraw = function(amount){
        this.balance -= amount;
    };
    this.deposit = function(amount){
        this.balance += amount;
    };
}
