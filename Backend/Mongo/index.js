const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res) => {
  console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user2 = new User({
//   name: "Priya",
//   email: "adam@example.com",
//   age: 238
// })

// user2.save().then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

// User.insertMany([
//   {name: "Priya", email: "adam@example.com", age: 32},
//   {name: "Priyanka", email: "adam@gmail.com", age: 32},
//   {name: "Peter", email: "Getta@gmail.com", age:34}
// ]).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

// User.find({age: {$gt: 48}}).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })


// User.updateOne({name: "Priya"}, {age: 55})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

User.deleteMany({name: "Priya"}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})


User.findById("669e9e2aad9994e19fc3a38c").then((res) => {
  console.log(res);
})