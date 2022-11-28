// we can declare same function name
// function hoisting

// anonymous function

// const sum = function (a, b) {
//     return a + b;
// }

const sum = (a, b) => a + b;

console.log(sum(1, 2));

const greet = (name) => `Hello ${name}`;

console.log(greet("Yagnesh"));

const user1 = {
  fistName: "Yagnesh",
  lastName: "Modh",
  age: 33,
  fullName: (firstName) => {
    return `hello ${firstName} ${this.lastName}`;
  },
};

console.log(user1.fullName(user1.fistName));

const user2 = {
  fistName: "Virat",
  lastName: "Kohli",
  age: 30,
  fullName: function () {
    return `${this.fistName} ${this.lastName}`;
  },
};

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user11 = new User("Yagnesh", "Modh", 33);
const user12 = new User("Virat", "Kohli", 30);

console.log(user11);

console.log(user11.fullName());
console.log(user12.fullName());

console.log(user1.fullName());

// var sum = () => {
//     return "hacked..."
// }

// console.log(sum());

// named function
// function add(a, b) {
//     return a + b;
// }

// function/method overloading will not work in javascript

// function add() {
//     return "hacked...."
// }

// console.log(add(1,2));

// create arrow function wich except "name" and designation

// and return My name is "name" and i am "designation"
