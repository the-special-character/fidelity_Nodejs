// Jascript single threaded sync programing language

// V8

// sync programing

// Process 1
console.log("s1");
console.log("s2");
setTimeout(() => {
  console.log("a1");
}, 1);
setTimeout(() => {
  console.log("a3");
}, 2);
console.log("s3");
console.log("s4");

Promise.resolve("Promise").then(() => console.log("a2"));
console.log("s5");

// 0.5 ms

// Process 2
// 5 minutes

// 5 minutes

// system

// user generated async

// Promises
// generators
