function saveToDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if(internetSpeed > 4) {
    console.log("your data was saved");
  }
  else {
    console.log("weak connection. data not saved");
  }
}

saveToDb("I'm a coder", () => {
  console.log("your data was saved");
});