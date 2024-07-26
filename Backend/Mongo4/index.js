const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


main().then(() => {
  console.log("Connection is successfully established");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/priya_and_patra');
}

let chat1 = new Chat({
  from: "Priya",
  to: "Patra",
  msg: "Love you!",
  created_at: new Date()
});

chat1.save().then((res) => {
  console.log(res);
})

app.get("/", (req, res) => {
  res.send("Root is working");
})


app.listen(8080, (req, res) => {
  console.log("listening on port 8080");
});