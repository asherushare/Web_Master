for(let i = 0; i < 4; i++) {
  console.log(i);
}

console.log(process.argv);

const math = require("./math");

console.log(math);

const info = require("./apple");

console.log(info);

console.log(info[1]);