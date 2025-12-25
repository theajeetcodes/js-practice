// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//   Functions & Methods – Practice Questions
// ==================================================



// ============================================
//                 QUESTION 1 
// ============================================
// Create a function named calculateSum
// that takes two numbers as parameters 
// and returns their sum.
// Print the returned value.

console.log("\n---- Question Output 1 ----");

 function calculateSum(a, b) {
    return a + b;
}

let sumResult = calculateSum(15, 25);
console.log("Sum:", sumResult);



// =============================================
//                QUESTION 2 
// =============================================
// Create an objet named user with:
// - name
// - age
// - greet method
// The greet method should print:
// "Hello, my name is <name>"

console.log("\n---- Question 2 Output ----");

let user = {
    name: "Ajeet",
    age:21,
    greet: function () {
        console.log("Hello, my name is", this.name);
    }

};

user.greet();



// ===============================================
//                 QUESTION 3 
// ===============================================
// Create an array of numbers.
// Use array methods to:
// - add a number at the end 
// - remove the last number 
// - check if a number exists in the array 

console.log("\n---- Question 3 Output ----");

let numbers = [10, 20, 30];

numbers.push(40);
console.log("After push:", numbers);

numbers.pop();
console.log("After pop:", numbers);

console.log("Includes 20:", numbers.includes(20));
console.log("Includes 100:", numbers.includes(100));



// =========================================
//        End of Practice Qustions
// =========================================












