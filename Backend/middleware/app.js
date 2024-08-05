const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next) => {
//   console.log("Hi, I am 1st middleware");
//   next();
// })

// app.use((req, res, next) => {
//   console.log("Hi, I am 2nd middleware");
//   next();
// })

// app.use((req, res, next) => {
//   console.log(req.method, req.hostname, req.pathname, req.path);
//   next();
// })

// app.use("/api", (req, res, next) => {
//   let {token} = req.query;
//   if(token === "giveaccess") {
//     next();
//   }
//   res.send("ACCESS DENIED");
// })

// app.get("/api", (req, res) => {
//   res.send("data");
// })


// we can pass middleware as function


const checkToken = ("/api", (req, res, next) => {
  let {token} = req.query;
  if(token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED");
})

app.get("/api", checkToken, (req, res) => {
  res.send("data");
})

app.get("/", (req, res) => {
  res.send("Working well!");
})

app.get("/random", (req, res) => {
  res.send("this is random page!");
})

app.get("/err", (req, res) => {
  abcd = abcd;
})

app.use((err, req, res, next) => {
  console.log("-----ERRPR----");
  res.send(err);
})

// app.use((err, req, res, next) => {
//   console.log("-----ERRPR 2----");
//   next(err);
// })


app.listen(8080, () => {
  console.log("listening on post 8080");
})