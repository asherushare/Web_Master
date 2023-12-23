for(let i=1; i<5; i++){
  console.log(i);
}


console.log("Odd numbers till 15");

for(let i=1; i<=15; i=i+2){
  console.log(i);
}

console.log("Even numbers till 10");

for(let i=2; i<=10; i=i+2){
  console.log(i);
}

console.log("Multiplication of 5");

for(let i=5; i<=50; i=i+5){
  console.log(i);
}

// console.log("User input number.");

// let n = prompt("Enter your number: ");
// n = parseInt(n);

// for(let i=n; i<=n*10; i=i+n){
//   console.log(i);
// }


// for(let i=1; i<=3; i++){
//   console.log("Nested Loops");
//   for(let j=1; j<=3; j++){
//     console.log(j);
//   }
// }

// // while loop

// console.log("While loop");

// let i = 0;

// while(i<5){
//   console.log(i);
//   i++;
// }

// // Practice questions

// const favMovie = "Avatar";

// let guess = prompt("Guess my favourite movie");

// while(guess != favMovie && guess != "quit") { 
//   guess = prompt("Wrong answer. Please try again");
// }

// if(guess == favMovie){
//   console.log("Your guess is correct.");
// }
// else{
//   console.log("You didn't guess my movie name and you exit from the game");
// }


// let j = 1;

// while(j<6) {
//   if(j == 3){
//     break;
//   }

//   console.log(j);
//   j++;

// }

// let k = 1;

// while(k<6) {
//   if(k == 3){
//     continue;
//   }

//   console.log(k);
//   k++;

// }



// Loops with array.

let heroes = [["ironman", "spiderma", "thor"], ["superman", "wonder woman", "flash"]];

for (let i = 0; i<heroes.length; i++){
  for(let j = 0; j<heroes[i].length; j++){
    console.log(heroes[i][j]);
  }
}

let i = ["Patra", "Kirsano"];

for( name of i) {
  console.log(name);
}