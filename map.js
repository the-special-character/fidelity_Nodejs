// map

// reduce -> Most powerfull method

// using map method you can only update the record
// can't add any record or remove any existing record
const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map((x) => {
  if (x % 2 === 0) {
    return x * 2;
  }
  return x;
});

console.log(newArr);

const users = [
  {
    name: "yagnesh",
    age: 33,
    gender: "male",
  },
  {
    name: "Virat",
    age: 30,
    gender: "male",
  },
  {
    name: "rohit",
    age: 28,
    gender: "male",
  },
  {
    name: "Alia",
    age: 24,
    gender: "female",
  },
  {
    name: "dipeeka",
    age: 35,
    gender: "female",
  },
  {
    name: "taimur",
    age: 08,
    gender: "male",
  },
  {
    name: "amitabh",
    age: 75,
    gender: "male",
  },
];

const newData = users.map((user) => {
  if (user.gender === "male") {
    return { ...user, occupation: "Cricketor" };
  } else {
    return { ...user, occupation: "Actor" };
  }
});

console.log(users);
console.log(newData);
