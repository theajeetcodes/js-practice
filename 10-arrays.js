// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//   JavaScript ARRAYS – Theory & Code
// ==================================================



// ==============================================
//              JavaScript ARRAYS
// ==============================================

// THEORY:
// An array is a collection of values.
// Arrays are used to store multiple values
// in a single variable.

// Array values are stored in indexed form.
// Index starts from 0.



// ==============================================
//               Creating Arrays
// ==============================================

// Arrays can store any data type

let numbers = [10, 20, 30, 40];
let names = ["Ajeet", "Rahul", "Aman"];
let mixed = [1, "Hello", true];

console.log("Numbers:", numbers);
console.log("Names:", names);
console.log("Mixed:", mixed);



// =============================================
//                Array Length
// =============================================

// length property returns total elements

console.log("\n---- Array Length Output ----");

console.log("Numbers length:", numbers.length);
console.log("Names length:", names.length);



// ============================================
//         Accessing Array Elements
// ============================================

// Access elements using index

console.log("\n---- Accessing Array Elements ----");

console.log("First number:", numbers[0]);
console.log("Second name:", names[1]);
console.log("Last number:", numbers[numbers.length - 1]);



// ============================================
//         Modifying Array Elements
// ============================================

// Change value using index

console.log("\n---- Modifying Array Elements ----");

numbers[1] = 25;
console.log("Updated Numbers:", numbers);



// ============================================
//                  push()
// ============================================

// push() adds element at the end 

console.log("\n---- push() Output ----");

numbers.push(50);
console.log("After push:", numbers);



// ============================================
//                    pop()
// ============================================

// pop() removes last element 

console.log("\n---- pop() Output ----");

numbers.pop();
console.log("After pop:", numbers);



// ===========================================
//                 unshift()
// ===========================================

// unshift() adds element at start 

console.log("\n---- unshift() Output ----");

numbers.unshift(5);
console.log("After unshift:", numbers);



// ============================================
//                   shift()
// ============================================

// shift() removes first element

console.log("\n----shift() Output ----");

numbers.shift();
console.log("After shift:", numbers);



// ============================================
//                includes()
// ============================================

// includes() checks value exists or not

console.log("\n---- includes() Output ----");

console.log("Includes 30:", numbers.includes(30));
console.log("Includes 100:", numbers.includes(100));



// =============================================
//                  indexOf()
// =============================================

// indexof() returns index of element 
// returns -1 if not found

console.log("\n---- indexOf() Output ----");

console.log("Index of 30:", numbers.indexOf(30));
console.log("Index of 100:", numbers.indexOf(100));



// ===========================================
//                 slice()
// ===========================================

// slice(start, end)
// does NOT change original array

console.log("\n---- slice() Output ----");

let slicedArray = numbers.slice(1, 3);
console.log("Sliced Array:", slicedArray);
console.log("Original Array:", numbers);



// ==========================================
//                splice()
// ==========================================

// splice(start, deleteCount, items)
// change original array

console.log("\n---- splice() Output ----");

numbers.splice(1, 1, 99);
console.log("After splice:", numbers);



// ========================================
//             Looping Arrays
// ========================================

// Using for loop

console.log("\n---- for Loop on Array ----");

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}



// =========================================
//              for...of Loop
// =========================================

// Easy way to loop arrays

console.log("\n---- for...of Loop ----");

for (let name of names) {
    console.log(name);
}



// =========================================
//             Array is Object
// =========================================

// typeof array is object

console.log("\n---- Array Type ----");

console.log("Type of numbers:", typeof numbers);
console.log("Is Array:", Array.isArray(numbers));



// =========================================
//             End of Arrays
// =========================================
