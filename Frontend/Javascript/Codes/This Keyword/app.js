const student = {
  name: "Patra",
  age: 23,
  class: "1st sem MCA",
  math: 20,
  coa: 45,
  lab: 34,
  getAvg() {
    let avg = (this.math + this.coa + this.lab) / 3;
    console.log(avg);
  }
};



