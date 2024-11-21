// OBJECTS
// Definition:
// OBJECT is the collection of properties, and property is associated with name(key) and value.

const { first } = require("rxjs");

// 1. Creation:
// 1.a) Literal Object : let user = {};
let user = {};
let person = {
    first_name: 'Ben',
    last_name: 'Doe',
    age: 30,
    is_student: true,
};

// 1.b) Constructor Object: let car = new Object();
let car = new Object();
car.brand = "KIA";
car.year = "2022";
car.oil = "Essence";

// 1.c) Function Contructor:
function Person(name, age) {
    this.name = name;
    this.age = age;
};

// 2) Acess to proprties: to acess to the object property, we have two methods:
// - Dot: teddy.name;
// - Square brackets: teddy['name'];

const users = {
    "name": "Teddy",
    "dob": "2012-02-30",
    "in school": "no"
};
users.name;
users.dob;
users["in school"]

const teddy = new Person("Manga Boy", "10");
const array = ['apple', 'orange', 'name'];
let count = 0;
array.forEach(element => {
    if (teddy[element]) {
        count++;
        console.log(element);
    }
});

// 3) Add new properties
const level4 = {
    start_date: "",
    end_date: "",
    level: 4,
    courses: ["Node.js programming"]
}
level4.amount = 1000000;
console.log(level4);

// 4) Delete properties
delete level4.start_date; // Remove the start date property from the the level4 object