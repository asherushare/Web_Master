const student = {
  name: "Patra",
  age: 23,
  class: "1st sem MCA",
  math: 20,
  coa: 45,
  lab: 34,
  getAvg() {
    let avg = (this.math + this.coa + this.lab) / 3;
    console.log(avg);
  }
};


// try and catch statements

console.log("Hello");



try {
  console.log(a);
} catch {
  console.log("Caught an aeeor.. a is not defined");
}

// console.log(a);
console.log("Patra Kirsani");

const sum = (a, b) => {
  console.log(a + b)
}

const cube = (n) => {
  return (n * n * n);
}

const mul = (a, b) => {
  a * b;
}

const mul2 = (a, b) => a - b;

// console.log("HI there..");

// setTimeout(() => {
//   console.log("This is Patra.");
// }, 4000)

// console.log("Welcome to");


// set interval

console.log("Hi there!");

// let id = setInterval(() => {
//   console.log("This is Patra");
// }, 2000);

// // console.log(id);

// let id2 = (() => {
//   console.log("Hello there.");
// }, 3000);

// console.log(id2);
// console.log(id);

// clearInterval(id2);

// const square = (n) => n * n;

// console>log(square(4));

// let id = setInterval(() => {
//   console.log("Printing 10 times.");
// },2000);


// setTimeout(() => {
// clearInterval(id);
// console.log("Clear interval run");
// }, 10000);

const arrayAverage = (arr) => {
  let total = 0;
  for(let number of arr) {
    total += number;
  }
  return total / arr.length;
};

let arr = [1, 5, 3, 2, 3, 6];
console.log(arrayAverage(arr));


// const object = {
//   messa
// }