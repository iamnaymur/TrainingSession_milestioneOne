/*JS Events, 
Data Types,
Array,
Objects,
Loop,
Debugging,
Events,
Scope,
Ajax,
Promises, 
DOM manipulationES6 features: let, const, Arrow Functions, Array Methods etc.
*/

// there are so many more events like - mouseenter, mouseleave, keydown, keypress,submit, etc...

document.getElementById("myButton").addEventListener(
  "click",
  (handleClick = () => {
    alert("Button clicked!");
    document.body.style.backgroundColor = "green";
  })
);

// loops

const firstOne = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
};
// firstOne();

const cart = [
  { name: "shoe", price: 200 },
  { name: "shirt", price: 1200 },
  { name: "pant", price: 500 },
  { name: "sunglass", price: 500 },
];
const totalCost = (products) => {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
  }
  return sum;
};
// console.log(totalCost(cart));

const whileLoopExample = () => {
  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }
};
// whileLoopExample()

const forOfLoopExample = () => {
  const numbers = [1, 2, 3, 4, 4, 5, 6];
  for (const element of numbers) {
    console.log(element);
  }
};
// forOfLoopExample()

const forInLoopExample = () => {
  const object = { a: 1, b: 2, c: 3 };
  for (const key in object) {
    console.log(key, object[key]);
  }
};

// foreach loop example
const numbersForEach = [1, 2, 3, 4, 5, 6];
numbersForEach.forEach((number) => {
  // console.log(number);
});

// array method
const numbers = [1, 2, 3, 4, 5, 6];
// push add an element at the end of the array
numbers.push(23);

// console.log(numbers)
// pop removes the last element from the array
numbers.pop();

// shift removes the first element from the array
numbers.shift();
// unshift adds an element at the start of an array
numbers.unshift(1);
// concat method helps to merge arrays together.

const girls = ["nahin", "sharmin", "tisha", "harun", "jerin", "samia"];
const boys = ["shafin", "topu", "jishan", "nirjon", "akibe", "miraj", "naymur"];

const friends = girls.concat(boys);
// console.log(friends)

// splice method add new element to the array and also can be used to remove elements
// splice method changes the original array
const movies = ["intersteller", "inception", "dunkirk", "dark knight", "tenet"];
movies.splice(3, 4);

// console.log(movies);

const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4);

// console.log(slicedArray);
// slice method doesn't change the original array

const fruits = ["apple", "banana", "orange"];
const fruitsAsString = fruits.toString();

// console.log(fruitsAsString);

// let and const
// let and const are block-scoped variables. let allows you to declare variables that can be reassigned, while const creates variables that cannot be reassigned after their initial value.

let x = 20;
x = 50; // Valid

const y = 50;
y = 30; // Error: Cannot reassign a constant variable

// ajax
// It is a technique that is used to make asynchronous requests to create more interactive and responsive web applications. Mainly when an event occurs browser creates a request and then send it to the server to get the specific data and the server creates a response back along with the expected data of the user and then the data gets processed using javascript and gets updated on the webpage. This it how the ajax actually works. Modern Browsers now can use Fetch API instead of the XMLHttpRequest Object and using fetch is much more efficient.

fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// PROMISES - are the most important thing to handle the asynchronous operations such as fetching data. In the above example you can see the .then() method and then after the catch() method, which are mainly the fundamental parts of promise. Promises are used to handle asynchronous operations. They represent a value that might be available now, or in the future, or never.


// Global scope variable
// Global scope variables can be accessed both from inside or outside of a function .
const globalVariable = "I am a global variable";
const myFunction = () => {
  console.log(globalVariable);
};
console.log(globalVariable);

// local scope variable
// Local scope variable can be accessed only from the inside of the function.
const myFunctionTwo = () => {
  const localVariable = "I am a local variable";
  console.log(localVariable);
};

// block scope variable
// Block scope variable can only be accessed from a block like the if-else block.
if (true) {
  const blockVariable = "I am a block variable";
  console.log(blockVariable);
}


