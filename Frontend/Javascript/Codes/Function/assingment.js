// aero function

const user = {
  username: "Patra",
  price: 99,

  welcomeMessage: function() {
    console.log(`${this.username}, welcome to website`);
  }
}

console.log(user.welcomeMessage());

const sum =(a, b) => {
  console.log(a + b);
};

sum(3, 4);

const cube = (a) => {
  return a * a * a;
};

cube(3);

const pow = (a, b) => {
  return a ** b;
};

pow(2, 4);

// map, filter, reduce

let arr = [23, 3, 3];

arr.map((value) => {
  console.log(value)
})

let value = 0;
arr.map((value) => {
  return value * value
})

let array = [23, 3, 4, 2];
array.map((value) => {
  value = array + 5
})

console.log(array);
console.log(array.map((values) => values + 4));