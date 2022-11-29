const arr = [1, 2, 3, 4, 5, 6];

const index = 3;

// const a1 = arr.slice(0, index);

// console.log(a1);

// const a2 = arr.slice(index);

// console.log(a2);

const newArr = [...arr.slice(0, index), 8, 9, 10, ...arr.slice(index + 2)];

console.log(newArr);

// const newArr = [0, ...arr, 7, 7, 8];

// console.log(newArr);
