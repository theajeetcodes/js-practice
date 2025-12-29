console.log("17 Event Practice File Connected");

// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//        JavaScript EVENTS PRACTICE
//            (Practice Only)
// ==================================================



// ===========================================
//           PRACTICE QUESTION 1
//           Button Click Counter
// ===========================================

// Task:
// - Increase count when button is clicked
// - Show updated count on page 

let countBtn = document.getElementById("countBtn");
let countText = document.getElementById("countText");
let count = 0;

countBtn.addEventListener("click", function () {
    count++;
    countText.innerText = "Button Clicked: " + count + "times";
});



// =======================================
//        PRACTICE QUESTION 2
//      Input Character Counter
// =======================================

// Task:
// - Count characters while typing
// - Show total characters live

let textInput = document.getElementById("textInput");
let charCount = document.getElementById("charCount");

textInput.addEventListener("input", function () {
    charCount.innerText = "Characters: " + textInput.value.length;
});



// ==========================================
//          PRACTICE QUESTION 3 
//         Hover Color Change Box
// ==========================================

// Task:
// - Change box color to green on mouse over
// - Change box color to red on mouse out

let colorBox = document.getElementById("colorBox")

colorBox.addEventListener("mouseover", function () {
    colorBox.style.backgroundColor = "green";
    colorBox.innerText = "Background is green";
});

colorBox.addEventListener("mouseout", function () {
    colorBox.style.backgroundColor = "red";
    colorBox.innerText = "Hover Me";
});



// ==========================================
//      END OF EVENTS PRACTICE FILE
// ==========================================














