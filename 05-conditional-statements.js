// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//   JavaScript Conditional Statements – Theory & Code
// ==================================================



// ===============================================
//      JavaScript CONDITIONAL STATEMENTS
// ===============================================

// THEORY:
// Conditional statements are used to make decisions
// in JavaScript based on conditions.

// If the condition is true, the code executes.
// If the condition is false, the code does not execute.



// JavaScript has the following conditional statements:
// 1. if
// 2. if-else
// 3. if-else if-else
// 4. switch



// ===========================================
//              1. if Statement
// ===========================================

// THEORY:
// The if statement executes code only
// when the given condition is true.

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote");
}



// =============================================
//          2. if-else Statement
// =============================================

// THEORY:
// The if-else statement executes one block
// if the condition is true and another block
// if the condition is false.

let marks = 35;

if (marks >= 40) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}



// =============================================
//        3. if-else if-else Statement
// =============================================

// THEORY:
// This statement is used to check
// multiple conditions one by one.

let score = 78;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}



// =======================================
//          4. switch Statement
// =======================================

// THEORY:
// The switch statement is used to compare
// one value with multiple cases.

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

        case 2:
            console.log("Tuesday");
            break;

            case 3:
                console.log("Wednesday");
                break;

                case 4:
                    console.log("Thursday");
                    break;

                    default:
                        console.log("Invalid day");
}



// ==========================================
//           Nested if Statement
// ==========================================

// THEORY:
// A nested if statement means an if
// statement inside another if statement.

let hasTicket = true;
let hasID = false;

if (hasTicket) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("Ticket required");
}



// =========================================
//     End of Conditional Statements
// =========================================