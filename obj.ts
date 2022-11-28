const fistName = "Yagnesh";

const lastName = "Modh";

const user = {
  fistName,
  lastName,
  age: 33,
  gender: "Male",
  info() {
    return `hello i am ${this.fistName} ${this.lastName}`;
  },
};

console.log(user);

const a = 1;

const b = 2;

const obj = {
  a,
  b,
  c: 3,
  sum() {
    return this.a + this.b + this.c;
  },
};

console.log(obj);
console.log(obj.sum());
