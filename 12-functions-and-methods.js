// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//   JavaScript FUNCTIONS & METHODS – Theory & Code
// ==================================================



// ==============================================
//             JavaScript FUNCTIONS
// ==============================================

// THEORY:
// A function is a reusable block of code 
// that performs a specific task.

// Functions help to:
// - Avoid repetition
// - Write clean code 
// - Make programs reusable



// ===============================================
//           1. Function Declaration 
// ===============================================

// Syntax:
// function functionName() {
//     code
// }

console.log("\n---- Function Declaration Output ----");

function greet() {
    console.log("Hello, Welcome to JavaScript");
}

greet();



// ==============================================
//        2. Function with Parameters
// ==============================================

// Parameters are values passed to a function

console.log("\n---- Function with Parameters Output ----");

function greetUser(name) {
    console.log("Hello", name);
}

greetUser("Ajeet");
greetUser("Neha");



// ==============================================
//       3. Function with Return Value
// ==============================================

// return sends value back from function

console.log("\n---- Function Return Output ----");

function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log("Sum:", result);



// ==============================================
//           4. Function Expression
// ==============================================

// Function stored inside a variable

console.log("\n---- Function Expression Output ----");

let multiply = function (a, b) {
    return a * b;
};

console.log("Multiply:", multiply(5, 4));



// ==============================================
//              5. Arrow Function 
// ==============================================

// Shorter way to write functions

console.log("\n---- Arrow Function Output ----");

let square = (num) => {
    return num * num;
};

console.log("Square:", square(6));



// ==============================================
//              JavaScript METHODS
// ==============================================

// THEORY:
// A method is a function that belongs 
// to an object.

// Rule:
// Function inside an object = Method



// =============================================
//             6. Object Method
// =============================================

console.log("\n---- Object Method Output ----");

let person = {
    name: "Ajeet",
    age: 21,
    greet: function() {
        console.log("Hello, my name is", this.name);
    }
};

person.greet();



// =============================================
//              7. String Methods
// =============================================

console.log("\n---- String Methods Output ----");

let text = "JavaScript";

console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());
console.log("Length:", text.length);



// =============================================
//             8. Array Methods
// =============================================

console.log("\n---- Array Methods Output ----");

let numbers = [10, 20, 30];

numbers.push(40);
console.log("After push:", numbers);

numbers.pop();
console.log("After pop:",numbers);

console.log("Includes 20:", numbers.includes(20));



// ============================================
//       9. Built-in Method Example
// ============================================

// console.log() is also a method

console.log("\n---- Built-in Method Example ----");
console.log("This is console.log method");



// ============================================
//      Function vs Method (Summary)
// ============================================

// Function:
// greet(), add()


// Method:
// person.greet()
// text.toUpperCase()
// numbers.push()



// =========================================================
//          End of Functions & Methods
// =========================================================