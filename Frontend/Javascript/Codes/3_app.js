let students = ["Patra", "Kirsani", "Moto"];
let nums = [3,34,343,50];
console.log(nums);

let info = ["Patra", 23, 3222];
console.log(info);

let empty = [];

// push, pop operation in array: 

let java = ["Oracle", "microsoft",34,'B',"Geeta"];
console.log(java);

java.push("Spider");

console.log(java);

java.pop();
console.log(java);


java.unshift("Nandini", 'Y');
console.log(java);

java.shift();
console.log(java);


//Array index

let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf(2));
console.log(primary.indexOf("red"));


// concat

let secondary = ["Patra", "Semala","Arjun Nana"];

let combine = primary.concat(secondary);
console.log(combine);

let Rev = combine.reverse();
console.log(Rev);


// Slice && splice in array: 

secondary.slice();
console.log(secondary.slice());

let sli = secondary.slice(-2);
console.log(sli);
let sli2 = secondary.slice(1,3);
console.log(sli2);

// Practice Qs

let start = ["january", "july", "march", "august"];

console.log(start);
let end = start;
console.log(start.slice(1,3));
start.splice(0,2, "Jully", "June");


let lang = ['c', 'c++', 'html', 'javacript', 'python', 'java', 'c#', 'sql'];
console.log(lang);

let result = lang;

console.log(result);


let g = 10;
let mums = [[2,3],[234,343][34,43]];


let game = [['X,', null, 'O'],[null,'X', null],['O',null, 'X']];


// Pracitce questions

let num = [2,32,322,222];
let n = 3;

let ans = (num.slice(0, n));
console.log(ans);


let ans2 = (num.slice(num.length-n));

console.log(ans2);



let str = prompt("please enter a string");
if(structuredClone.lenth==0){
  console.log("string is empty");
}
else{
  console.log("string is not empty");
}


let char = "Patra";
let idx = 3;

if(char[idx] == char[idx].toLowerCase()){
  console.log("character is lowercase");
}else{
  console.log("character is not lowercase");
}