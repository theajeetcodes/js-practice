// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//   JavaScript STRINGS – Theory & Code
// ==================================================



// =========================================
//           JavaScript STRINGS
// =========================================

// THEORY:
// A string is a sequence of characters.
// Strings are used to store and manipulate text.
// In JavaScript, strings are immutable
// (original string does not change).



// =====================================
//          Creating Strings
// =====================================
// Strings can be created using:
// 1. Double quotes " "
// 2. Single quotes ' '
// 3. Backticks ` `

let firstName = "Ajeet";
let lastName = 'Yadav';

console.log("First Name:", firstName);
console.log("Last Name:", lastName);



// ======================================
//            String Length
// ======================================

// length property returns total characters

console.log("\n---- String Length Output ----");

let language = "JavaScript";

console.log("String:", language);
console.log("Length:", language.length);



// =====================================
//          String Indexing
// =====================================

// Index starts from 0

console.log("\n---- String Indexing Output ----");

console.log("First character:", language[0]);
console.log("Second character:", language[1]);
console.log("Last character:", language[language.length - 1]);



// ====================================
//       String Concatenation
// ====================================

// Joining strings using + operator

console.log("\n---- String Concatenation Output ----");

let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);



// =======================================
//          Template Literals
// =======================================

// Template literals use backticks ` `
// Variables can be inserted using ${ }

console.log("\n---- Template Literals Output ----");

let age = 21;

let intro = `My name is ${fullName} and my age is ${age}`;

console.log("Intro:", intro);



// ===========================================
//               Changing Case
// ===========================================

// toUpperCase() and toLowerCase()

console.log("\n---- Changing Case Output ----");

let text = "JavaScript";

console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());



// ===========================================
//                 trim()
// ===========================================

// trim() removes extra spaces
// from start and end of string

console.log("\n---- trim Output ----");

let message = "     hello world     ";

console.log("Original:", message);
console.log("Trimmed:",message.trim());



// =====================================
//              slice()
// =====================================

// slice(start, end)
// end index is not included

console.log("\n---- slice Output ----");

let course = "JavaScript";

console.log("Slice (0, 4):", course.slice(0, 4));



// =====================================
//              replace()
// =====================================

// replace(oldValue, newValue)

console.log("\n---- replace Output -----");

let sentence = "I love JavaScript";

console.log("Before replace:", sentence);
console.log("After replace:", sentence.replace("love", "learn"));



// ===========================================
//                 includes()
// ===========================================

// includes() checks if value exists
// returns true or false

console.log("\n---- includes Output ----");

console.log("Includes 'Java':", sentence.includes("Java"));
console.log("Includes 'Python':", sentence.includes("Python"));



// =========================================
//       startsWith() & endsWith()
// =========================================

console.log("\n---- startsWith & endsWith Output ----");

console.log("Starts with 'I':", sentence.startsWith("I"));
console.log("Ends with 'JavaScript':", sentence.endsWith("JavaScript"));



// ========================================
//               charAt()
// ========================================

// charAt(index) returns character

console.log("\n---- charAt Output ----");

console.log("Character at index 2:", sentence.charAt(2));



// =======================================
//              split()
// =======================================

// split() converts string into array

console.log("\n---- split Output ----");

let words = sentence.split(" ");

console.log("Split words:", words);



// =====================================
//         String Immutability
// =====================================

// Strings do not change original value 

console.log("\n---- String Immutability Output ----");

let demo = "hello";
demo.toUpperCase();

console.log("Original String:", demo);
console.log("After toUpperCase():", demo.toUpperCase());



// =========================================
//             End of Strings
// =========================================









