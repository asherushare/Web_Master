const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});

app.use((req, res) => {
  console.log("request is received");
  res.send({
    name: "Hello, world",
    color: "red",
    patra: "this is a sure name",
  });
});