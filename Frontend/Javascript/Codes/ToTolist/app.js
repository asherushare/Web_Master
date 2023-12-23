// let todo = [];

// let req = prompt("Please enter your request");

// console.log(req);

// while(true) {
//   if(req == "quit") {
//     console.log("Quitting app");
//     break;
//   }

//   if(req == "list") {
//     console.log("----------");
//     for(task of todo) {
//       console.log(task);
//     }
//     console.log("------");
//   }
//   else if(req == "add") {
//     prompt("Please enter the task you want to add");
//     todo.push(task);
//     console.log("task added");
//   }

//   req = prompt("Please enter your request");

// }


// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// console.log(arr.splice(4));


// let name = ["Discipline", "Consisteny", "Hard work", "Time", "Money"];

// console.log(name);
// console.log(name.splice(2,4));


// console.log(arr2.splice(1,6));

// for(let i = 0; i <= arr2.length; i++) {
//   if(i == num2) {
//     arr2.splice(i);
//   }

//   console.log(i);
// }



// Wrong Approach

// console.log(number);

// while(number != 0) {
//   let reminder = number % 10;
//   count = count + reminder;
//   number = number/10;
//   count++;
// }

// console.log(number);


// Write a JS program to find the sun of digits in anumber .
// Example : if number = 232343, sum = 25

// let num = 124234;
// let sumOfDigit = 0;
// // let numCount = 0;

// while(num > 0) {
//   let reminder = num % 10;
//   sumOfDigit += reminder;
//   num = Math.floor(num / 10);

// }

// console.log(sumOfDigit);

// let num = 124234;
// let sumOfDigit = 0;

// let copyNum = num;

// while (copyNum > 0) {
//   let remainder = copyNum % 10;
//   sumOfDigit += remainder;
//   copyNum = Math.floor(copyNum / 10);
// }

// console.log(sumOfDigit);


// let num = prompt("Enter n value here: ");

let n = 5;

let factorial = 1;

for(let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log(`factorial of ${n} is ${factorial}`);

let arr = [23,33,234,100,23,3];
let largest = 0;

for(let i = 0; i < arr.length; i++) {
  if(largest < arr[i]) {
    largest = arr[i];
  }
}

console.log(largest);




