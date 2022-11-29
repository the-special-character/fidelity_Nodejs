const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  },
};

const { b, a, c, d, ...rest } = obj;
console.log(rest);

// CRUD

// destructure
// const a = 2;

// const key = "b";

// const { a:objA, [key]: keyVal, d: { a:da, c } } = obj;

// console.log(a);
// console.log(objA);
// console.log(keyVal);
// console.log(c);
// console.log(da);

// dot notation
// console.log(obj.b);
// console.log(obj.c);
// console.log(obj.d);

// const key = "b";
// array notation
// console.log(obj[key]);

// delete obj.c;

// console.log(obj);

// const a = {
//     a:1,
//     b: 5
// }

// const b = {
//     b: 2
// }

// const ab = {...a, c: 7};

// console.log(ab);
// obj.d = 4;
// console.log(obj);

// Old Javascript Technique
// const obj1 = Object.assign({}, obj, { d: 4 })

// spread operator
// const obj1 = { ...obj, d: { ...obj.d, a: 5 } };

// obj.d.a = 8

// console.log(obj1);
// console.log(obj);

const user = {
  name: "Yagnesh",
  age: 33,
  gender: "male",
  occupation: "Business",
};

const newUser = { ...user, age: 35 };

console.log(newUser);

// Update age 33 -> 35, remove gender, add new Property called married: false
