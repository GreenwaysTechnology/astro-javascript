
class Account {
    constructor() {

    }
    //method
    deposit() {
        return 100.0;
    }
}
class SavingsAccount extends Account {
    constructor() {
        super();
    }
    //redefine method
    deposit() {
        return 1000.00 * super.deposit();
    }
}
var sb = new SavingsAccount();
console.log(sb.deposit())

