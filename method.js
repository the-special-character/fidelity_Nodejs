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

// O(logN)
// reocrd not found -1
const aliaIndex = users.findIndex((x) => x.name === "priyaka");

console.log(aliaIndex);

// O(logN)
// reocrd not found undefined
const aliaInfo = users.find((x) => x.name === "priyaka");

console.log(aliaInfo);

// O(N)
// reocrd not found []
const maleRecords = users.filter((x) => x.gender === "male" && x.age > 30);

console.log(maleRecords);

const isAliaExist = users.some((x) => x.name === "Alia");

console.log(isAliaExist);

const isEveryAdult = users.every((x) => x.age > 18);

console.log(isEveryAdult);
