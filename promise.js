// callback

// Promises

// Generator

// document.addEventListener("click", () => {

// })

console.log("s1");
console.log("s2");
setTimeout(() => {
  console.log("a1");
}, 10.01);
setTimeout(() => {
  console.log("a3");
}, 10);
console.log("s3");
console.log("s4");

Promise.resolve("Promise").then(() => console.log("a2"));
console.log("s5");

// pending
// resolve
// reject

const p1 = () => {
  return new Promise((resolve, reject) => {
    // server call
    setTimeout(() => {
      reject("p1 rejected");
    }, 2000);
  });
};

// start loader
p1()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
    // stop loeader
  });
