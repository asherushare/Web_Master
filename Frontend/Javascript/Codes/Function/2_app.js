function hello() {
  console.log("Hello there");
}

hello();
hello();

function printName() {
  console.log("This is your second revision");
  console.log("Patra");
}

printName();

function print1to5() {
  for(let i = 0; i <= 5; i++) {
    console.log(i);
  }
}

print1to5();

function isAdult(a) {
  if(a > 18) {
    console.log("He/She is adult");
  }
  else {
    console.log("Not adult");
  }
}

isAdult(45);


function printPoem() {
  console.log("Twinkle twinkle little star, ");
  console.log("Twinkle twinkle little star, ");
}

printPoem();

// let rand = Math.floor(Math.random() * 6) + 1;
// console.log(rand);

function dice() {
  let rand = Math.floor(Math.random() * 6) + 1;
  console.log(rand);
}

dice();
dice();
dice();

function name(name, age) {
  console.log(`${name}'s age is ${age}`);
}

name("Patra", 23);

function aveOf3(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}

aveOf3(23, 24, 25);

function mul(a) {
  for(let i = a; i <= a * 10; i = i + a) {
    console.log(i);
  }
}

mul(5);
mul(11);

function sum(n) {
  let add = 0;
  for(let i = 0; i <= n; i++) {
    add = add + i;
  }
  return add;
}

console.log(sum(5));
console.log(sum(10));


let str = ["Patra", "Topper", "Discipline"];

function concat(str) {
  let arr = " ";
  for(let i = 0; i < str.length; i++) {
    arr += str[i];
  }
  return arr;
}

console.log(concat(str));

// scope 
// function scope

let sum2 = 23;

function calSum(a, b) {
  let sum = a + b;
  console.log(sum);
}

calSum(23, 55);
console.log(sum2);

// block scope 

// This variable is accessable within in a curly braces only.

// lexical scope

function outerFunc() {
  let x = 23;
  let y = 23;
  function innerFunc() {
    let b = 24;
    let c = 55;
    console.log(x);
  }
}

// For each

let arr = [1, 2, 3, 4, 5];

let print = function(el) {
  console.log(el);
}

arr.forEach(print);

let nums = [2, 3, 4, 3];
let finalVal = nums.reduce((res, el) => res + el);
console.log(finalVal);

