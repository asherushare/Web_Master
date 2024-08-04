const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("Hi, I am 1st middleware");
//   next();
// })

// app.use((req, res, next) => {
//   console.log("Hi, I am 2nd middleware");
//   next();
// })

app.use((req, res, next) => {
  console.log(req.method, req.hostname, req.pathname, req.path);
  next();
})

app.get("/", (req, res) => {
  res.send("Working well!");
})

app.get("/random", (req, res) => {
  res.send("this is random page!");
})

app.listen(8080, () => {
  console.log("listening on post 8080");
})