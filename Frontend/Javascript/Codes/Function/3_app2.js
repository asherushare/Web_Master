let arr = [23, 33, 3, 5];
console.log(arr);

let max = -1;
for(let i = 0; i < arr.length; i++) {
  if(max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);

// using reduce function 

let ans = arr.reduce((max, el) => {
  if(max < el) {
    return el;
  }
  else {
    return max;
  }
});

console.log(ans);

// Practice questions

let nums = [23, 53, 9, 8];

let answer = nums.every((el) => el % 10 == 0);
console.log(answer);

// minimum element in an array: 

let array = [3, 2, 5, 3, 66, 3];

let minVal = 1000;
let min = array.reduce((min, el) => {
  if(min > el) {
    return el;
  }
  else {
    return min;
  }
})

console.log(min);

// Default paramenter

function sum(a, b = 3) {
  return a + b;
}

console.log(sum(23, 32));
console.log(sum(4));

// Spread

// Destructure

const student = {
  name: "Patra",
  age: 23,
  class: 9,
  subjects: ["hindi", "endlish", "math", "science"]
};

// let name = stduent.name;
// let age = stduent.age;

let {age, name} = student;