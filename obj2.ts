const obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.freeze(obj);

obj.b = 5;
console.log(obj);

// primitive typeof data stored in heap memory

// only array data stored in stack memmory

// heap
// stack
// cache

// obj.d = 5;

// const obj1 = Object.assign({}, obj, { d: {e: 1}})

// console.log(obj1);

// {
//     a: 1,
//     b: 2,
//     c: 3,
//     b: 4,
//     d: {
//         e: 0,
//         f: 1,
//         g: 2,
//         h: 3
//     }
//     d: {e: 1}
// }

// console.log(obj);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: {
//         e: 5,
//         f: 1,
//         g: 2
//     }
// }

// console.log(obj["b"]);

// // O(1) + O(1) => O(2)
// obj.d.e = 5
// obj.d.f = 2

// console.log(obj);

// const obj1 = Object.assign({}, obj, { d: { e: 7,f: 5 }})

// console.log(obj1);

//
// const obj1 = Object.assign({}, obj)

// spread operator

// console.log(obj);
// console.log(obj1);
