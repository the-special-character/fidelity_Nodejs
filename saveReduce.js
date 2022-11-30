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

const age = 32;

const ageGroup = Math.floor(age / 10);
const key = `${ageGroup}0-${ageGroup}9`;

console.log(key);

const groupByAge = users.reduce((p, c) => {
  const ageGroup = Math.floor(c.age / 10);
  const key = `${ageGroup}0-${ageGroup}9`;
  (p[key] = p[key] || []).push(c);

  // p[key].push(c);
  return p;
}, {});

console.log(groupByAge);

const groupByFn = (data, key1) => {
  return data.reduce((p, c) => {
    // const ageGroup = Math.floor(c.age / 10);
    // const key = `${ageGroup}0-${ageGroup}9`;
    const key = c[key1];
    if (p[key] === undefined) {
      p[key] = [];
    }
    p[key].push(c);
    return p;
    // (p[key] = p[key] || []).push(c)
    // return p;
  }, {});
};

console.log(groupByFn(users, "gender"));
