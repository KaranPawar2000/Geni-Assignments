//Parameterised
function myFunction(a, b) {
    return a * b;
  }
//Can Stored in variable
const x = function (a, b) {return a * b};
let z = x(4, 3);

//using New keyword
const myFunction = new Function("a", "b", "return a * b");

let y = myFunction(4, 3);

// Self-Invoking Functions
(function () {
    let x = "Hello!!";  
  })();

  //Arrow Function
  // ES5
var k = function(x, y) {
    return x * y;
  }
  
  // ES6
  const k = (x, y) => x * y;

//   Default Parameter Values
//If y is not passed or undefined, then y = 10.
function myFunction(x, y = 10) {
    return x + y;
  }
  myFunction(5);

//   Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array

  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let p = sum(4, 9, 16, 25, 29, 100, 66, 77);   

