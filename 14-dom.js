console.log("DOM File Connected Successfully");



// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//            JavaScript DOM 
//        (Theory + Practical Code)
// ==================================================



// ====================================
//           WHAT IS DOM ?
// ====================================

// DOM stands for Document Object Model
// Browser converts HTML into a TREE structure 
// JavaScript uses DOM to access and manipulate this tree

// DOM allows us to:
// - Read HTML elements
// - Change content
// - Change styles
// - Handle events
// - Create or remove elements

// IMPORTANT:
// DOM works ONLY in browser environment
// It does NOT work in Node.js directly



// ==========================================
//       HTML STRUCTURE (REFERENCE)
// ==========================================

// <h1 id="heading">Hello DOM</h1>

// <p class="para">Paragraph One</p>
// <p class="para">Paragraph Two</p>

// <div id="container"></div>

// <button id="btn">Click Me</button>

// <input id="inputBox" placeholder="Type here" />



// ===========================================
//         SELECT ELEMENT BY ID
// ===========================================

let heading = document.getElementById("heading");

console.log("Heading Element:", heading);
console.log("Text Content:", heading.innerText);
console.log("HTML Content:", heading.innerHTML);



// ==========================================
//           CHANGE TEXT CONTENT
// ==========================================

// innerText -> only text
// innerHTML -> text + HTML tags

heading.innerText = "Welcome to JavaScript DOM";
heading.innerHTML = "<span style='color:red'>Welcome to JavaScript DOM</span>";



// =========================================
//        CHANGE CSS USING STYLE
// =========================================

// CSS properties are written in camelCase

heading.style.color = "blue";
heading.style.backgroundColor = "lightgray";
heading.style.padding = "10px";
heading.style.borderRadius = "6px";



// ==========================================
//      SELECT ELEMENTS BY CLASS NAME
// ==========================================

let paras = document.getElementsByClassName("para");

console.log("Paragraphs:", paras);
console.log("First Paragraph:", paras[0].innerText);

paras[0].style.color = "green";
paras[1].style.color= "purple";



// =========================================
//       SELECT ELEMENTS BY TAG NAME
// =========================================

let allParagraphs = document.getElementsByTagName("p");
console.log("All <p> tags:", allParagraphs);



// ========================================
//      querySelector (FIRST MATCH)
// ========================================

// Selects the first matching element

let firstPara = document.querySelector(".para");
firstPara.style.fontWeight = "bold";



// =========================================
//     querySelectorAll (ALL MATCHES)
// =========================================

// Returns a NodeList (supports forEach)

let allParas = document.querySelectorAll(".para");

allParas.forEach((p) => {
    p.style.fontSize = "18px";
});



// =========================================
//          GET & SET ATTRIBUTES
// =========================================

heading.setAttribute("title", "This is a DOM heading");
console.log(heading.getAttribute("title"));



// ========================================
//          CREATE NEW ELEMENT
// ========================================

let newDiv = document.createElement("div");
newDiv.innerText = "This DIV is created using JavaScript";

newDiv.style.border = "2px solid black";
newDiv.style.marginTop = "10px";
newDiv.style.padding = "10px";



// ========================================
//         ADD ELEMENT TO PAGE
// ========================================

// append -> adds at end 
// prepend -> adds at beginning

let container = document.getElementById("container");

container.append(newDiv);
// container.prepend(newDiv);



// =======================================
//            REMOVE ELEMENT
// =======================================

// newDiv.remove();



// =======================================
//              DOM EVENTS
// =======================================

// Events are actions performed by user
// Example: click, input, keydown, submit

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    alert("Button Clicked!");
    console.log("Button was clicked");
});



// =======================================
//             EVENT OBJECT
// =======================================

// Event object gives details about event

btn.addEventListener("click", function (event) {
    console.log(event);
    console.log("Target Element:", event.target);
});



// =======================================
//        INPUT EVENT HANDLING
// =======================================

let inputBox = document.getElementById("inputBox");

inputBox.addEventListener("input", function () {
    console.log("User Typed:", inputBox.value);
});



// =======================================
//            KEYBOARD EVENTS
// =======================================

inputBox.addEventListener("keydown", function (e) {
    console.log("Key Pressed:", e.key);
});



// ======================================
//            DOM TRAVERSING
// ======================================

// parentElement -> parent node
// children -> child elements
// nextElementSibling -> next element
// previousElementSibling -> previous element

console.log("Parent:", container.parentElement);
console.log("Children:", container.children);
console.log("Next Sibling:", heading.nextElementSibling);
console.log("Previous Sibling:", container.previousElementSibling);



// =======================================
//           CLASSLIST METHODS
// =======================================

// add -> add class
// remove -> remove class
// toggle -> add/remove automatically

heading.classList.add("active");
heading.classList.remove("active");
heading.classList.toggle("active");



// =========================================
//         setTimeout (RUN ONCE)
// =========================================

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);



// ===============================================
//       setInterval (REPEATED EXECUTION)
// ===============================================

let count = 0;

let interval = setInterval(() => {
    count++;
    console.log("Count:", count);

    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);



// ==========================================
//            WINDOW & DOCUMENT
// ==========================================

// window -> global object
// document -> represents HTML page

console.log(window);
console.log(document.title);

document.title = "DOM Practice";



// ==========================================
//           FORM HANDLING (BASIC)
// ==========================================

// <form id="myForm">
//   <input id="nameInput" />
//   <button type="submit">submit</button>
// </form>

let form = document.getElementById("myForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stops page reload
        console.log("Form Submitted");
    });
}



// ==========================================
//                DOM SUMMARY
// ==========================================

// DOM connects JavaScript with HTML
// Used for dynamic & interactive websites
// Events make websites responsive
// DOM is the foundation of Frontend frameworks
// Mandatory for Frontend Developers



// ===========================================
//               END OF DOM
// ===========================================






