let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function(e) {
  console.log("div was clicked");
})

ul.addEventListener("click", function(e) {
  e.stopPropagation();
  console.log("ul was clicked");
})

for(let li of lis) {
  li.addEventListener("click", function(e) {
    e.stopPropagation(); // prevent
    console.log("li was clicked");
  })
}