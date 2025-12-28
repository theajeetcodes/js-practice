console.log("Events File Connected Successfully");

// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//            JavaScript EVENTS
//        (Theory + Practical Code)
// ==================================================



// ==========================================
//            WHAT IS AN EVENT ?
// ==========================================

// An event is an action performed by the user
// or the browser that JavaScript can respond to.

// Examples:
// - Clicking a button
// - Typing in input
// - Moving mouse
// - Page load



// ==========================================
//           COMMON EVENT TYPES
// ==========================================

// Mouse Events: click, dblclick, mouseover, mouseout, mousemove
// Keyboard Events: keydown, keyup, keypress (old)
// Form / Input Events: input, change, submit, focus, blur
// Window Events: load, scroll, resize



// ==========================================
//               CLICK EVENT
// ==========================================

let clickHeading = document.getElementById("clickHeading");
let clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", function () {
    clickHeading.innerText = "Button Clicked!";
    clickHeading.style.color = "blue";
    clickHeading.style.backgroundColor = "lightyellow";
});



// ===========================================
//        INPUT EVENT (LIVE TYPING)
// ===========================================

let inputBox = document.getElementById("inputBox");
let inputOutput = document.getElementById("inputOutput");

inputBox.addEventListener("input", function () {
    inputOutput.innerText = inputBox.value;
});



// ==========================================
//       MOUSEOVER / MOUSEOUT EVENT
// ==========================================

let hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = "green";
    hoverBox.innerText = "Mouse Over!";
});

hoverBox.addEventListener("mouseout", function () {
    hoverBox.style.backgroundColor = "red";
    hoverBox.innerText = "Hover Over Me";
});



// ========================================
//            KEYBOARD EVENT
// ========================================

document.addEventListener("keydown", function (event) {
    console.log("Key Pressed:", event.key);
});



// ======================================
//         FORM SUBMIT EVENT
// ======================================

let myForm = document.getElementById("myForm");
let formInput = document.getElementById("formInput");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form Submitted:", formInput.value);
});




// =======================================
//             EVENT OBJECT 
// =======================================

// Event object gives details about the event

clickBtn.addEventListener("click", function (event) {
    console.log("Event Object:", event);
    console.log("Target Element:", event.target);
});



// ======================================
//       THIS KEYWORD IN EVENTS
// ======================================

// 'this' refers to the element on which the event is applied

clickBtn.addEventListener("click", function () {
    this.style.backgroundColor = "black";
    this.style.color = "white";
});



// =====================================
//    MULTIPLE EVENTS ON ONE ELEMENT
// =====================================

clickBtn.addEventListener("mouseenter", function () {
    console.log("Mouse Entered Button");
});

clickBtn.addEventListener("mouseleave", function () {
    console.log("Mouse Left Button");
});



// ======================================
//           EVENTS SUMMARY
// ======================================

// addEventListener best practice
// click, input, keyboard, mouse, form events
// event object usage
// preventDefault() for forms
// this keyword in events
// multiple events on one element
// real-world interaction handling



// ===================================
//       END OF EVENTS FILE
// ===================================









