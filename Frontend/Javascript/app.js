console.log("This is my code in Jacacript.");
console.log("This is my code in Jacacript.");
let a = 33;
let b = 90;
console.log(a + b);
let pencilPrice = 23;
let bookPrice = 90;
// console.log("Total price is: ",pencilPrice + bookPrice, "rupees.");
let output = `The total price is : ${pencilPrice + bookPrice} rupees.`;
console.log(output);
a = 23;
b = 89;

let str = "atra";
if((str[0] ==='a') && (str.lenth>3)){
  console.log("This is a good string.");
}
else {
  console.log("This is not a good string.");
}

let day = 6;

switch(day){
  case 1:{
    console.log("Monday");
    break;
  }
  case 2:{
    console.log("Tuesday");
    break;
  }
  case 3:{
    console.log("Wednesday");
    break;
  }
  case 4:{
    console.log("Thursday");
    break;
  }
  case 5:{
    console.log("Friday");
    break;
  }
  case 6:{
    console.log("Saturday");
    break;
  }
  case 7:{
    console.log("Sunday");
    break;
  }
  default:{
    console.log("Invalid number.");
  }
};

// alert("Wrong");

console.error("This is an error.");
console.warn("This is a warning message");

let test = prompt("Enter anything here: ");
console.log(test);

let firstName = prompt("Enter your name: ");
let lastName = prompt("Enter your last name: ");

console.log(alert(firstName + " Love " + lastName));