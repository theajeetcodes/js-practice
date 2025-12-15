// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//    JavaScript Data Types – Theory & Code
// ==================================================


// ========================================
//        JavaScript Data Types
// ========================================

// THEORY:
// Data Types define the type of data a variable can hold.
// JavaScript is a dynamically typed language,
// which means we don't need to specify data types explicitly.

// JavaScript has 2 main categories:
// 1. Primitive Data Types 
// 2. Non-Primitive (Reference) Data Types


// ===========================================
//         1. Primitive Data Types 
// ===========================================

// -------------------------------
// 1. Number
// -------------------------------
// Used for integers and decimals
let price = 499;
let rating = 4.5;

console.log("Price:",price);
console.log("Rating:",rating);



// -------------------------------
// 2. String
// -------------------------------
// Used for text (inside quotes)
let firstName = "Ajeet";
let lastName = "Yadav";

console.log("First Name:",firstName);
console.log("Last Name:",lastName);



// -------------------------------
// 3. Boolean
// -------------------------------
// Used for true / false values
let isLoggedIn = true;
let hasPermission = false;

console.log("Is Logged In:",isLoggedIn);
console.log("Has Permission:",hasPermission);



// -------------------------------
// 4. Undefined
// -------------------------------
// Variable declared but value not assigned 
let city;

console.log("City:",city);



// -------------------------------
// 5. Null
// -------------------------------
// Represents intentional empty value
let middleName = null;

console.log('Middle Name:',middleName);



// -------------------------------
// 6. Symbol (rare but important)
// -------------------------------
// Used to create unique values
let uniqueId = Symbol("id");

console.log("Unique ID:",uniqueId);



// -------------------------------
// 7. BigInt
// -------------------------------
// Used for very large numbers
let bigNumber = 1234567890123456789012345678990n;

console.log("Big Number:",bigNumber);



// =================================================
//          Checking Type using typeof
// =================================================

console.log("Type of price:",typeof price);
console.log("Type of firstName:",typeof firstName);
console.log("Type of isLoggedIn:",typeof isLoggedIn);
console.log("Type of city:",typeof city);
console.log("Type of middleName:",typeof middleName);
console.log("Type of uniqueId:",typeof uniqueId);
console.log("Type of bigNumber:",typeof bigNumber);



// ==============================================
//         2. Non-Primitive Data Types
// ==============================================

// -------------------------------
// 1. Object
// -------------------------------
let user = {
    name: "Ajeet",
    age: 21,
    isDeveloper: true
};

console.log("User Object:", user);



// -------------------------------
// 2. Array
// -------------------------------
// Used to store multiple values
let skills = ["HTML", "CSS", "JavaScript", "Node.js"];

console.log("Skills:", skills);



// -------------------------------
// 3. Function
// -------------------------------
function greetUser() {
    console.log("Hello Bhai, welcome to JavaScript");
}

greetUser();



// ============================================
//             End of Data Types
// ============================================


