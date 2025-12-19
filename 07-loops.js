// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//   JavaScript LOOPS – Theory & Code
// ==================================================



// ====================================================
//                 JavaScript LOOPS
// ====================================================

// THEORY:
// Loops are used to execute a block of code 
// multiple times until a condition is met.

// Instead of writing the same code again and again,
// loops help us write clean and efficient code.



// JavaScript mainly has the following loops:
// 1. for loop
// 2. while loop
// 3. do-while loop
// 4. for...of loop
// 5. for...in loop



// ==========================================
//               1. for Loop
// ==========================================

// THEORY:
// The for loop is used when we know 
// how many times we want to run the loop.

// Syntax:
// for (initialization; condition; increment/decrement) {
//     code to execute
// }

console.log("---- for Loop Output ----");

for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}



// ===========================================
//               2. while Loop
// ===========================================

// THEORY:
// The while loop runs as long as
// the given condition is true.

// Initialization is done before the loop.
// Increment/decrement is done inside the loop.

console.log("\n---- while Loop Output ----");

let count = 1;

while (count <= 5) {
    console.log("Count:", count);
    count++;
}



// ==========================================
//            3. do-while Loop
// ==========================================

// THEORY:
// The do-while loop executes the code 
// at least once, even if the condition is false.

// Condition is checked after the loop body.

console.log("\n---- do-while Loop Output ----");

let num = 1;

do {
    console.log("Number:", num);
    num++;
} while (num <= 5);



// =======================================
//          4. for...of Loop
// =======================================

// THEORY:
// The for...of loop is used to iterate
// over iterable objects like arrays and strings.

console.log("\n---- for...of Loop ----");

let languages = ["HTML", "CSS", "JavaScript"];

for (let lang of languages) {
    console.log("Language:", lang);
}



// ======================================
//           5. for...in Loop
// ======================================

// THEORY:
// The for...in loop is used to iterate
// over object properties (keys).

console.log("\n---- for...in Loop Output ----");

let student = {
    name: "Ajeet",
    age: 21,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}



// ========================================
//            break Statement
// ========================================

// THEORY:
// The break statement is used to stop 
// the loop immediately.

console.log("\n---- break Statement Output ----");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log("Value:", i);
}



// ======================================
//         continue Statement
// ======================================

// THEORY:
// The continue statement skips the current
// iteration and moves to the next one.

console.log("\n---- continue Statement Output ----");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Value:", i);
}



// =========================================
//             End of Loops
// =========================================