h1 = document.querySelector("h1");


// setTimeout(function() {
//   h1.style.color = "red";
// }, 1000)

// setTimeout(function() {
//   h1.style.color = "green";
// }, 2000)

// setTimeout(function() {
//   h1.style.color = "blue";  
// }, 2000)


function colorChange(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    nextColorChange();
  }, delay)
}

colorChange("red", 1000, () => {
  colorChange("orange", 1000, () => {
    colorChange("blue", 1000);
  });
});
