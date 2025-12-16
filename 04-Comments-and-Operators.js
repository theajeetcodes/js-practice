// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//   JavaScript Comments & Operators – Theory & Code
// ==================================================



// ========================================
//         JavaScript COMMENTS
// ========================================

// THEORY:
// Comments are used to explain code.
// They improve readability and understanding.
// JavaScript ignores comments during execution.

// JavaScript has two types of comments:
// 1. Single-line comments
// 2. Multi-line comments



// -------------------------------
// 1. Single-line Comment
// -------------------------------
// This is a single-line comment

let language = "JavaScript";
console.log("Language:", language);



// -------------------------------
// 2. Multi-line Comment
// -------------------------------
/*
This is a multi-line comment.
Used for long explanations or notes.
*/

let year = 2025;
console.log("Year:", year);



// ==========================================
//          JavaScript OPERATORS
// ==========================================

// THEORY:
// Operators are symbols used to perform operations on values.
// Example: +, -, *, /

// JavaScript has different types of operators:
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Unary Operators
// 6. Ternary Operator



// ==========================================
//         1. Arithmetic Operators
// ==========================================

// THEORY:
// Arithmetic operators are used to perform
// basic mathematical calculations.

let a = 10;
let b = 3;

console.log("\n--- Arithmetic Operators ---");

console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus (a % b):", a % b);           // remainder
console.log("Exponentiation (a ** b):", a ** b);  // power 



// =============================================
//          2. Assignment Operators
// =============================================

// THEORY:
// Assignment operators assign values to variables.

let x = 5;

console.log("\n--- Assignment Operators ---");

x += 2;  // x = x + 2
console.log("x += 2:", x);

x -= 1;  // x = x - 1
console.log("x -= 1:", x);

x *= 3;  // x = x * 3
console.log("x *= 3:", x);

x /= 2;  // x = x / 2
console.log("x /= 2:", x);



// ==========================================
//        3. Comparison Operators
// ==========================================

// THEORY:
// Comparison operators compare two values
// and return true or false.

let num1 = 10;
let num2 = "10";

console.log("\n--- Comparison Operators ---");

console.log("num1 == num2:", num1 == num2);         // value check
console.log("num1 === num2:", num1 === num2);       // value + type
console.log("num1 != num2:", num1 != num2);
console.log("num1 !== num2:", num1 !== num2);
console.log("num1 > 5:", num1 > 5);
console.log("num1 < 5:", num1 < 5);



// ==========================================
//         4. Logical Operators 
// ==========================================

// THEORY:
// Logical operators are used to combine conditions.

let isAdult = true;
let hasID = false;

console.log("\n--- Logical Operators ---");

console.log("AND (&&):", isAdult && hasID);
console.log("OR (||):", isAdult || hasID);
console.log("NOT (!):", !isAdult);



// ===========================================
//           5. Unary Operators
// ===========================================

// THEORY:
// Unary operators work on a single value.
// Increment (++) and Decrement (--) are unary operators.

let count = 5;

console.log("\n--- Unary Operators ---");

count++;
console.log("After Increment:", count);

count--;
console.log("After Decrement:", count);



// =======================================
//          6. Ternary Operator 
// =======================================

// THEORY:
// Ternary operator is a short form of if-else.

// Syntax:
// condition ? trueValue : falseValue

let age = 21;
let result = (age >= 18) ? "Adult" : "Minor";

console.log("\n--- Ternary Operator ---");
console.log("Result:", result);



// =======================================
//      End of Comments & Operators
// =======================================