console.log("19 Classes and objects Practice File Connected");

// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//        CLASSES & OBJECTS - PRACTICE
//              (Practice Only)
// ==================================================



// ============================================
//                 QUESTION 1 
//                 Car Class
// ============================================

// Task:
// - Create a Car class
// - Properties: brand, model, year
// - Methods: startCar(), stopCar()

console.log("\n---- Question 1 Output ----");

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    startCar() {
        console.log(this.brand + " " + this.model + " is starting");
    }

    stopCar() {
        console.log(this.brand + " " + this.model + " is stopped");
    }
}

// object creation
let car1 = new Car("Toyota", "Corolla", 2022);
car1.startCar();
car1.stopCar();



// ===============================================
//                   QUESTION 2
//                 Student Class
// ===============================================

// Task:
// - Create a Student class
// - Properties: name, marks
// - Method: calculateResult()
// - If marks >= 40 -> Pass, else Fail

console.log("\n---- Question 2 Output ----");

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateResult() {
        if (this.marks >= 40) {
            console.log(this.name + " is Passed");
        } else {
            console.log(this.name + " is Failed");
        }
    }
}

// object creation
let student1 = new Student("Ajeet", 78);
student1.calculateResult();



// ======================================
//              QUESTION 3
//           BankAccount Class
// ======================================

// Task:
// - Create BankAccount class
// - Properties: owner, balance
// - Methods: deposit(), withdraw(), showBalance()

console.log("\n---- Question 3 Output ----");

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited", amount);
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Withdraw:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    showBalance() {
        console.log("Current Balance:", this.balance);
    }
}

// object creation
let account1 = new BankAccount("Ajeet", 1000);
account1.deposit(500);
account1.withdraw(300);
account1.showBalance();



// =========================================
//            END OF PRACTICE
// =========================================

