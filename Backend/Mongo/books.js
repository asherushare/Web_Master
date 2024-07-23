const mongoose = require('mongoose');

main()
.then(() => {
  console.log("Connection successful");
})
.catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  }, 
  price: {
    type: Number,
    required: true,
  }, 
  discount: {
    type: Number,
    default: 0,
  }
})

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "Math and Biochemistry",
  author: "Priyanka",
  price: 3222
});

book1.save().then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});