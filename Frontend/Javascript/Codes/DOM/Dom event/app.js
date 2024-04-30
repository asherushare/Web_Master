let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//   alert("button was clicked");
// }

// function sayHello() {
//   alert("Hello!");
// }

// btn.onclick = sayHello;

let btns = document.querySelectorAll("button");

for(btn of btns) {
  // btn.onclick = sayHello;
  // btn.onmouseenter = function() {
  //   console.log("You entered a button");
  // }

  // btn.addEventListener("click", sayHello);
  // btn.addEventListener("click", sayName);

  btn.addEventListener("dblclick", function() {
    console.log("You double clicked");
  });
}

function sayHello() {
  alert("Hello!");
}

function sayName() {
  alert("This is me Patra");
}