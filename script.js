"use strict";

//Traditional way of assigning a an element in an array to a variable
//Example
const arr = [1, 3, 4, 5]
const a = arr[0]
const b = arr[1];
const c = arr[2];
const d = arr[3];

//By destructuring (starting from ES6)
const [e, f, g, h] = arr
//These new variables are assigned to the their corresponding element in the arr array

//Destructuring objects

const restaurant = {
  name: "Classico Italiano",
  location: "Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMneu: ["Pizza", "Pasta", "Risotto"],
};


let [main, , sec] = restaurant.categories
console.log(main, sec)

const temp = main
main = sec
sec = temp
console.log(main, temp)
console.log(restaurant.categories)