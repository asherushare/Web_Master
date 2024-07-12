const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection ({
  host: localhost,
  user: 'root',
  database: 'test'
});


let createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

console.log(createRandomUser());