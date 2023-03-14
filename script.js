"use strict";

//Traditional way of assigning a an element in an array to a variable
//Example
const arr = [1, 3, 4, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

//By destructuring (starting from ES6)
const [e, f, g, h] = arr;
//These new variables are assigned to the their corresponding element in the arr array

//Destructuring objects

const restaurant = {
  name: "Classico Italiano",
  location: "Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMneu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //opens 24hrs
      close: 24,
    },
  },

  order: function (starterInd, mainInd) {
    return [this.starterMenu[starterInd], this.mainMneu[mainInd]];
  },
};

let [main, , sec] = restaurant.categories;
console.log(main, sec);

const temp = main;
main = sec;
sec = temp;
console.log(main, temp);
console.log(restaurant.categories);

//Destructuring Th Restaurant Object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Assigning a new varaible names to the Restaurant properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating  Variables in an Object Destructuring
let p = 11;
let q = 99;
const obj = { p: 23, q: 7, r: 9 };
({ p, q } = obj);
console.log(p, q);

//Destructuring Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close)