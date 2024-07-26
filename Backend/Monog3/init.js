const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
  console.log("Connection is successfully established");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
  {
    from: "Patra",
    to: "Priya",
    msg: "I love you too",
    created_at: new Date()
  },
  {
  from: "Priya",
  to: "Patra",
  msg: "I love you very much!",
  created_at: new Date()
},
{
  from: "Gouri",
  to: "Pinesh",
  msg: "I love you",
  created_at: new Date()
}
];

Chat.insertMany(allChats);