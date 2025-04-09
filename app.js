// Soal 1
const person = {
  name: "John",
  age: 25,
  job: "Developer",
};

// Soal 2
console.log(person.name);
console.log(person.job);

// Soal 3
person["hobby"] = "Reading";

// Soal 4
person.age = 30;

// Soal 5
delete person.job;

// Soal 6
const student = {
  name: "Alice",
  grade: 90,
  address: {
    city: "Jakarta",
    country: "Indonesia",
  },
};

console.log(student.address.city);

// soal 7
person.greetings = function () {
  return `Hi, my name is ${this.name}`;
};

console.log(person.greetings());
