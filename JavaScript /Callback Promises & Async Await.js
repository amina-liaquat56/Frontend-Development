                // Sync in JS

      //  Synchronous

console.log("First");
console.log("Second"); // Waits for first to complete
console.log("Third");  // Waits for second to complete

  // Asynchronous 

console.log("First");
setTimeout(() => console.log("Second"), 1000); // Doesn't block
console.log("Third"); // Runs immediately
// Output: First, Third, Second

         // Callbacks

function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data); // "Data received" after 1 second
});

         // Callback Hell

getUser(userId, (user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0].id, (comments) => {
            console.log(comments); // Deeply nested
        });
    });
});

               // Promises

let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation succeeded");
    } else {
        reject("Operation failed");
    }
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

           // Promises object 

// Pending: Initial state
// Fulfilled: Operation completed successfully
// Rejected: Operation failed

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) resolve("Greater than 10");
        else reject("Number too small");
    });
}

checkNumber(15)
    .then(console.log) // "Greater than 10"
    .catch(console.error);

             // Async-Await

async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();

            //  IIFE (Immediately Invoked Function Expression)

// Regular IIFE
(function() {
    console.log("IIFE executed");
})();

// Async IIFE
(async () => {
    let data = await fetchData();
    console.log(data);
})();













