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

//   {
//     "00-09":[],
//     "20-29": [],
//     "30-39":[],
//     "70-79": []
//   }

const groupBy = users.reduce((p, c) => {
  const key = c.gender;
  if (p[key] === undefined) {
    p[key] = [];
  }
  p[key].push(c);
  return p;
}, {});

console.log(groupBy);

//   {
//     male:[],
//     female: []
//   }

//   O(N)
//   const aliaInfo = users.reduce((p, c) => {
//     if(c.gender === "male")
//     {
//        p.push(c)
//     }
//     return p;
//   }, [])
//   console.log(aliaInfo);

// const arr = [1,2,3,4,5,6];

// const sum = arr.reduce((p, c) => {
//     return p + c;
// }, 10)

// console.log(sum);

// let result = 0

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     result += element;
// }

// console.log(result);
