function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype = {
  test: "hello",
};

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather);
console.log(myMother);

//   const sum = (a, b) => {
//     console.log(this);

//     return a + b;
//   }

//   sum(1,2 )
