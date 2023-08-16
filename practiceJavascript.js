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

// document.getElementById("myButton").addEventListener(
//   "click",
//   (handleClick = () => {
//     alert("Button clicked!");
//     document.body.style.backgroundColor = "green";
//   })
// );
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

const girls = ['nahin', 'sharmin', 'tisha', 'harun', 'jerin', 'samia']
const boys = ['shafin', 'topu', 'jishan', 'nirjon', 'akibe', 'miraj', 'naymur']

const friends = girls.concat(boys)
// console.log(friends)

// splice method add new element to the array and also can be used to remove elements
const movies=['intersteller','inception','dunkirk','dark knight','tenet']
movies.splice(3,4)

console.log(movies);
