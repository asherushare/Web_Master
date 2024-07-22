const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '/views'));

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  database: 'new_app',
  password: 'Patra@9090'
});

// let q = "show tables";

// try {
//   connection.query(q, (err, result) => {
//   if(err) throw err;
//   console.log(result[0]);
//   console.log(result[1]);
//   })
// } catch(err) {
//   console.log(err);
// }

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
];
}

// Home route

app.get("/", (req, res) => {
  let q = "select count(*) from user";
  try {
  connection.query(q, (err, result) => {
  if(err) throw err;
  let count = result[0]["count(*)"];
  res.render("home.ejs", { count });
  })

} catch(err) {
  console.log(err);
  res.send("some error in database");
}
})

// Show Route

app.get("/user", (req, res) => {
  res.send("success");
  let q = "select * from user";

  try {
    connection.query(q, (err, result) => {
      if(err) throw err;
      // console.log(result);
      res.render("showusers.ejs");
    });
  } catch(err) {
    console.log(err);
    res.send("some error in database");
  }
})

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});



//try {
//   connection.query(q, [data], (err, result) => {
//   if(err) throw err;
//   console.log(result[0]);
//   console.log(result[1]);
//   })
// } catch(err) {
//   console.log(err);
// }

// connection.end();