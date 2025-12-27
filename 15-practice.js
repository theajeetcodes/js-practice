console.log("DOM Practice File Connected Successfully");

// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//            JavaScript DOM PRACTICE
//            (Questions + Solutions)
// ==================================================



// ====================================================
//                   QUESTION 1 
//    Change heading text and style on button click
// ====================================================

// HTML REFERENCE:
// <h2 id="q1Heading">DOM Practice Question 1</h2>
// <button id="q1Btn">Change Text</button>

// TASK:
// 1. When the button is clicked 
// 2. Change the heading text
// 3. Change text color to green
// 4. Change background color to light yellow



// --------------- SOLUTION ---------------

let q1Heading = document.getElementById("q1Heading");
let q1Btn = document.getElementById("q1Btn");

q1Btn.addEventListener("click", function () {
    q1Heading.innerText = "Text Changed Successfully!";
    q1Heading.style.color = "green";
    q1Heading.style.backgroundColor = "lightyellow";
});



// ==========================================
//              QUESTION 2 
//     Display input value live on screen
// ==========================================

// HTML REFERENCE:
// <input id="q2Input" placeholder="Type something..." />
// <p id="q2Output"></p>

// TASK:
// 1. When the user types in the input box
// 2. Show the typed value inside the paragraph



// --------------- SOLUTION ---------------

let q2Input = document.getElementById("q2Input");
let q2Output = document.getElementById("q2Output");

q2Input.addEventListener("input", function () {
    q2Output.innerText = q2Input.value;
});



// ===========================================
//               QUESTION 3
//  Create and remove an element dynamically
// ===========================================

// HTML REFERENCE:
// <button id="q3AddBtn">Add Box</button>
// <button id="q3RemoveBtn">Remove Box</button>
// <div id="q3Container"></div>

// TASK:
// 1. On clicking "Add Box", create a new div
// 2. The div text should be "I am a new box"
// 3. On clicking "Remove Box", remove the div



// ---------------- SOLUTION ----------------

let q3AddBtn = document.getElementById("q3AddBtn");
let q3RemoveBtn = document.getElementById("q3RemoveBtn");
let q3Container = document.getElementById("q3Container");

let box; // to store reference of created div

q3AddBtn.addEventListener("click", function () {
    box = document.createElement("div");
    box.innerText = "I am a new box";

    box.style.border = "2px solid black";
    box.style.padding = "10px";
    box.style.marginTop = "10px";

    q3Container.append(box);
});

q3RemoveBtn.addEventListener("click", function () {
    if (box) {
        box.remove();
    }
});



// ==================================================
//             DOM PRACTICE SUMMARY
// ==================================================

// Element selection (getElementById)
// Event handling (click, input)
// Text and style manipulation
// createElement, append, remove
// Real-world DOM usage



// ==================================================
//           END OF DOM PRACTICE FILE
// ==================================================