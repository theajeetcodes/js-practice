// ==================================================
// 🌟🌟🌟 AJEET'S JS PRACTICE FOLDER 🌟🌟🌟
//       Callback, Promise & Async/Await
//               Theory + Code 
// ==================================================



// =========================================
//      JavaScript Async Programming
// =========================================

// THEORY:
// JavaScript single-threaded hoti hai
// Lekin async features ki wajah se 
// time-taking kaam (API, timer, file, DB)
// background mein handle ho jaate hain

// Async handle karne ke 3 main tareeke:
// 1. Callback
// 2. Promise
// 3. Async / Await



// =======================================
//         1. CALLBACK FUNCTION
// =======================================

// THEORY:
// Callback ek function hota hai
// jo dusre function ko argument ke roop mein diya jata hai
// Kaam complete hone ke baad callback call hota hai



// ---------------------------------------
//        Simple Callback Example
// ---------------------------------------

function greet(name, callback) {
    console.log("Hello", name);
    callback();
}

function sayBye() {
    console.log("Bye Bhai");
}

greet("Ajeet", sayBye);



// ---------------------------------------
//       Callback with Async Task
// ---------------------------------------

// setTimeout async function hai

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

function processData() {
    console.log("Data processed");
}

fetchData(processData);



// -----------------------------------
//     Callback Hell (Problem)
// -----------------------------------

// Callback ke andar callback
// Code unreadable ho jata hai (Callback Hell)

setTimeout(() => {
    console.log("Task 1");

    setTimeout(() => {
        console.log("Task 2");

        setTimeout(() => {
            console.log("Task 3");
        }, 1000);
    }, 1000);
}, 1000);



// ======================================
//              2. PROMISE
// ======================================

// THEORY:
// Promise future ka result represent karta hai
// ya to success (resolve)
// ya failure (reject)

// Promise ke 3 states:
// pending, fulfilled, rejected



// -----------------------------------------
//             Promise Example
// -----------------------------------------

let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected");
    }
});

myPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});



// --------------------------------------
//       Promise with Async Task
// --------------------------------------

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched using Promise");
        }, 2000);
    });
}

getData()
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});



// ------------------------------------
//         Promise Chaining
// ------------------------------------

function taskOne() {
    return Promise.resolve("Task One Done");
}

function taskTwo() {
    return Promise.resolve("Task Two Done");
}

taskOne()
.then((res) => {
    console.log(res);
    return taskTwo();
})
.then((res) => {
    console.log(res);
});



// =====================================
//          3. ASYNC / AWAIT
// =====================================

// THEORY:
// Async/Await Promise ka clean version hai
// Code synchronous jaisa dikhta hai 
// Readability best hoti hai 

function fetchAsyncData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched using Async/Await");
        }, 2000);
    });
}

async function showData() {
    let data = await fetchAsyncData();
    console.log(data);
}

showData();



// ------------------------------------------
//     Async / Await with Error Handling
// ------------------------------------------

// try-catch error handle karta hai 

function fetchWithError() {
    return new Promise((resolve, reject) => {
        reject("Something went wrong");
    });
}

async function handleData() {
    try {
        let result = await fetchWithError();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

handleData();



// ======================================
//            IMPORTANT NOTES
// ======================================

// Async/Await -> Promise pe based
// Promise -> Callback pe based
// Real projects mein mostly Async/Await use hota hai



// ===========================================
//          End of Async Concepts
// ===========================================