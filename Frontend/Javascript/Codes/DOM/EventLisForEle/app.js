let p = document.querySelector("p");

p.addEventListener("click", function() {
  console.log("This is clicked");
});

let Div = document.querySelector("div");
Div.addEventListener("mouseenter", function() {
  console.log("This is mouseenter");
});

let btn = document.querySelector("button");

btn.addEventListener("click", function() {
  console.log(this.innerText);
  this.style.backgroundColor = "lime";
});