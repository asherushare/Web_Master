function hello() {
  console.log("Hello, This is Patra");
}

hello();
hello();

function printName() {
  console.log("NITK, Surathkal");
}

printName();

function printPoem() {
  console.log("Twinkle twinkle, little star");
  console.log("how I wonder what you are");
}

printPoem();

function numGenerator() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
}

numGenerator();
numGenerator();
numGenerator();
numGenerator();
numGenerator();
numGenerator();


function printInfo(name, age) {
  console.log(`${name}'s age is ${age}`);
}

printInfo("Patra", 23);

function calcAvg(num1, num2, num3) {
  let avg = (num1 + num2 + num3)/3;
  console.log(avg);
}


calcAvg(23,3,23);
calcAvg(3,4,5);
calcAvg(45,64,6);


function tablePrint(name) {
  for(let i = name; i <= name * 10; i += name) {
    console.log(`Table of ${name} is: `, i);
  }
}

tablePrint(4);

function isAdult(age) {
  if(age > 18) {
    return "adult";
  }
  else {
    return "not adult";
  }
}
isAdult(34);
console.log("bye bye");

let myArray = ["Patra", "Bhimsen", "Success", "discipline"];

function strSum(myArray) {
  let result = []; // Initialize result to an empty string
  for (let i = 0; i < myArray.length; i++) {
    result += myArray[i];
  }
  return result;
}

strSum(myArray);
strSum(myArray);

// Predict the output 

// let greet = "Hello";

// function changeGreet() {
//   let greet = "namaste";
//   console.log(greet);
//   function innerGreet() {
//     console.log(greet);
//   }
// }

// console.log(greet);
// changeGreet();

// Higher order funtion

function multipleGreet(func, count) {
  for(let i = 1; i <= count; i++) {
    func();
  }
}

let grade = function() {
  console.log("Hello");
}

multipleGreet(grade, 5);

const calcuator = {
  add: function(a, b) {
    return a + b;
  },
  sub: function(a, b) {
    return a - b;
  },
  mul: function(a, b) {
    a * b;
  }
}


// Practice questions

let array = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

// elements larger than a number num

function getElements(arr, num) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > num) {
    console.log(arr[i]);
    }
  }
}

getElements(arr, num);

// let str = "Karnataka";

// for(let i = 0; i <= str.length; i++) {
//   for(let j = 1; j < str; j++) {
//     if(i != j) {
//       console.log(i);
//     }
//   }
// }

// console.log(i);

let str = "abedabcdefgggh";

// function to get string with all unique elements

function getUnique(str) {
  let ans = "";
  for(let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if(ans.indexOf(currChar) == -1) {
      ans += currChar;
    }
  }
  return ans;
}

getUnique(str);


let country = ["Australia", "Germany", "United States of America"];

function longestName(contry) {
  let ansIdx = 0;

  for(let i = 0; i < contry.length; i++) {
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if(currLen > ansLen) {
      ansIdx = i;
    }
  }
  return country[ansIdx];
}

longestName(country);

// Write a JavaScript function to count the number of vowels in a String argument.

let name = "patra";
let counting = 0;

function countVowels(name) {
  for(int = 0; i < name.length; i++) {
    if(
      name.charAt(i) == "a" ||
      name.charAt(i) == "e" ||
      name.charAt(i) == "i" ||
      name.charAt(i) == "o" ||
      name.charAt(i) == "u"
    ) {
      counting++;
    }
  }
  return counting;
}