console.log("18 Classes and Objects File Connected");

// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//        JavaScript CLASSES & OBJECTS
//            (Theory + Practice)
// ==================================================



// ========================================
//            PART 1 : OBJECT 
// ========================================

// Object = collection of properties (key : value)

let student = {
    name: "Ajeet",
    age: 20,
    course: "JavaScript",
    isLearning: true
};

console.log(student);
console.log(student.name);
console.log(student["age"]);



// ========================================
//        PART 2 : MODIFY OBJECT
// ========================================

student.age = 21;
student.city = "India";

console.log(student);



// =======================================
//       PART 3 : OBJECT METHOD 
// =======================================

let user =  {
    username: "coderAjeet",
    login() {
        console.log("User logged in");
    }
};

user.login();



// ======================================
//        PART 4 : THIS KEYWORD
// ======================================

let person = {
    name: "Ajeet",
    greet() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();



// ===========================================
//       PART 5 : CONSTRUCTOR FUNCTION
// ===========================================

function Student(name, age) {
    this.name = name;
    this.age = age;
}

let s1 = new Student("Ajeet", 20);
let s2 = new Student("Rahul", 22);

console.log(s1);
console.log(s2);



// ======================================
//            PART 6 : CLASS 
// ======================================

class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}

let car1 = new Car("BMW", "Black");
let car2 = new Car("Audi", "White");

console.log(car1);
console.log(car2);



// ===============================================
//            PART 7 : CLASS METHOD
// ===============================================

class Mobile {
    constructor(name) {
        this.name = name;
    }
    ring() {
        console.log(this.name + " is ringing");
    }
}
let phone = new Mobile("iphone");
phone.ring();



// =======================================
//      PART 8 : MULTIPLE METHODS
// =======================================

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
    }

    withdraw(amount) {
        this.balance -= amount;
        console.log("Withdraw:", amount);
    }

    showBalance() {
        console.log("Balance:", this.balance);
    }
}

let account = new BankAccount("Ajeet", 1000);
account.deposit(500);
account.withdraw(200);
account.showBalance();



// =======================================
//         PART 9 : INHERITANCE
// =======================================

class Animal {
    speak() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

let dog = new Dog();
dog.speak();
dog.bark();



// ===========================================
//         PART 10 : SUPER KEYWORD
// ===========================================

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, role) {
        super(name);
        this.role = role;
    }

    info() {
        console.log(this.name + " is a " + this.role);
    }
}

let emp = new Employee("Ajeet", "Frontend Developer");
emp.info();



// ============================================
//        PART 11 : PRACTICE TASK
// ============================================

// TASK:
// Create a class Student
// Properties: name, marks
// Method: getResult()

class StudentResult {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getResult() {
        if (this.marks >= 40) {
            console.log(this.name + " passed");
        } else {
            console.log(this.name + " failed");
        }
    }
}

let result1 = new StudentResult("Ajeet", 85);
result1.getResult();



// ======================================
//             END OF FILE 
// ======================================