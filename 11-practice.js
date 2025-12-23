// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//        ARRAY PRACTICE QUESTIONS
// ==================================================



// =======================================
//              QUESTION 1
// =======================================
// Given an array of numbers,
// print the sum of all elements using a loop.

console.log("\n---- Question 1 Output ----");

let numbers = [10, 20, 30, 40, 50];

let sum = 0

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum of array elements:", sum);



// =========================================
//             QUESTION 2
// =========================================
// Given an array of strings,
// print only those names whose length is greater than 4.

console.log("\n---- Question 2 Output ----")

let names = ["Ajeet", "Rahul","Aman", "Sandeep", "Rohit"];

for (let name of names) {
    if (name.length > 4) {
        console.log(name);
    }
}



// ==============================================
//                 QUESTION 3
// ==============================================
// Given an array of numbers,
// create a new array that contains only even numbers.

console.log("\n---- Question 3 Output ----")

let nums = [12, 5, 8, 21, 16, 9, 30];
let evenNumbers = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        evenNumbers.push(nums[i]);
    }
}

console.log("Even Number Array;", evenNumbers);



// ==========================================
//         END OF ARRAY PRACTICE
// ==========================================



