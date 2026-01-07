// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//   Practice Questions: Callback, Promise & Async/Await
// ==================================================



// =============================================
//      QUESTION 1 : CALLBACK PRACTICE
// =============================================

// TASK:
// 1. Create a function calculateSum(a, b, callback)
// 2. Calculate the sum of a and b 
// 3. Pass the result to the callback function
// 4.The callback function should print the result
// 5. Use setTimeout (1 second delay)



// -------- SOLUTION --------

function calculateSum(a, b, callback) {
    setTimeout(() => {
        let sum = a + b;
        callback(sum);
    }, 1000);
}

function printResult(result) {
    console.log("Sum is:", result);
}

calculateSum(10, 20, printResult);



// ======================================
//    QUESTION 2 : PROMISE PRACTICE
// ======================================

// TASK:
// 1. Create a function checkAge(age)
// 2. Return a Promise
// 3. If age >= 18, resolve("Eligible to vote")
// 4. If age < 18, reject("Not eligible to vote")
// 5. Use setTimeout (1.5 second delay)



// -------- SOLUTION --------

function checkAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve("Eligible to vote");
            } else {
                reject("Not eligible to vote");
            }
        }, 1500);
    });
}

checkAge(21)
.then((result) => {
    console.log(result);
})

.catch((error) => {
     console.log(error);
});



// ========================================
// QUESTION 3 : ASYNC / AWAIT PRACTICE
// ========================================

// TASK:
// 1. Create a function fetchUser()
// 2. Return a Promise
// 3. After 2 seconds, return the user name ("Ajeet")
// 4. Use async/await to print the result
// 5. Handle errors using try-catch



// -------- SOLUTION --------

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;

            if (success) {
                resolve("Ajeet");
            } else {
                reject("Failed to fetch user");
            }
        }, 2000);
    });
}

async function showUser() {
    try {
        let user = await fetchUser();
        console.log("User Name:", user);
    } catch (error) {
        console.log("Error:", error);
    }
}

showUser();



// ======================================
//        END OF PRACTICE FILE
// ======================================

