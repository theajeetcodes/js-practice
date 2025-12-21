// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//   Loops & Strings – Practice Questions
// ==================================================



// ============================================
// QUESTION 1
// ============================================
// Create a string and use a loop to print
// each character of the string on a new line.

console.log("---- Question 1 Output ----");

let word = "JavaScript";

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}



// =======================================
// QUESTION 2 
// =======================================
// Create an array of strings.
// Use a for...of loop to print each string
// in uppercase format.

console.log("\n---- Question 2 Output ----");

let skills = ["html","css", "javascript"];

for (let skill of skills) {
    console.log(skill.toUpperCase());
}



// =========================================
// QUESTION 3
// =========================================
// Create a string with extra spaces.
// Use string methods to remove spaces
// and print the clean string using a loop.

console.log("\n---- Question 3 Output ----");

let message = "     learn javascript     ";
let cleanMessage = message.trim();

for (let i = 0; i < cleanMessage.length; i++) {
    console.log(cleanMessage[i]);
}