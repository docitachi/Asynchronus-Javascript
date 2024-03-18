// setTimeout(() => {
//     // Code to be executed after a certain delay
//     console.log("Timeout completed!");
// }, 2000); // Delay in milliseconds (e.g., 2000ms = 2 seconds)




var count = 1;

let myInterval = setInterval(() => {
    console.log(`Interval ${count}`);
    count++;
    if (count > 5) {
        clearInterval(myInterval);
    }
}, 1000); // Interval in milliseconds (e.g., 1000ms = 1 second)



// Fetching data from an API


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

let name = "John";
let age = 29;

console.log(`My name is ${name} and I am ${age} years old.`);