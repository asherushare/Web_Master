const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}));



main().then(() => {
  console.log("Connection is successfully established");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
  from: "Patra",
  to: "Priya",
  msg: "How are you doing?",
  created_at: new Date()
  })

chat1.save().then((res) => {
  console.log(res);
})

//Index route

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats })
})

// New route

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
})

// Create route

app.post("/chats", (req, res) => {
  let {from, to, msg} = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date()
  })
  newChat.save().then((res) => {
    console.log("Chat was saved successfully");
  }).catch((err) => {
    console.log(err);
  })
  res.redirect("/chats");
})

app.get("/", (req, res) => {
  res.send("Working!");
})

app.listen(8080, (req, res) => {
  console.log("listening");
})