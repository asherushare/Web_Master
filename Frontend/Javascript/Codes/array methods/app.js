console.log("Hello Patra, Stay focused and learn new things");

let arr = [1, 2, 3, 4, 5];

function print(el) {
  console.log(el);
}

arr.forEach(print);

let arr2 = [
  {
    name: "Patra",
    marks: 95,
  },
  {
    name: "Shradha",
    marks: 98.3,
  },
  {
    name: "rajat",
    marks: 83,
  },
]; 

arr.forEach((student) => {
  console.log(student.marks);
});

let num = [2, 3, 5, 7];

let double = num.map((el) => {
  return el * 2;
});

// each 

arr = [2, 4, 6].every((el) => {
  el % 2 == 0;
});

// reduce funtion