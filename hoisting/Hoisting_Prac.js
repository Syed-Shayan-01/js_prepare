// Variable Hoisting
console.log("Hello, " + name); // Output: Hello, undefined
var name = "John Do"; // The declaration 'var name' is hoisted, but the initialization happens here.
// The 'name' variable is hoisted and initialized as 'undefined' before the actual assignment.
// That's why "Hello, undefined" is printed first, then 'name' is assigned the value "John Do".


// Function Declaration Hoisting
function functionName() {
  console.log("john do"); // Function declaration is fully hoisted, so it can be called before it's written
  function inside() {
    console.log("I am inside the function");
    function anotherFunc() {
      console.log("I am another function");
    }
    anotherFunc(); // 'anotherFunc' is fully hoisted and can be called inside 'inside'
  }
  inside(); // 'inside' is fully hoisted and can be called here
}

functionName(); // This works because the function declaration is fully hoisted to the top.


// Function Expression Hoisting
outerFunction(); // Error: outerFunction is not a function
// Even though 'outerFunction' is hoisted, only the declaration is hoisted, not the assignment.
// The 'outerFunction' variable is hoisted and initialized as 'undefined', so it throws an error when called before initialization.

var outerFunction = function () {
  name = "John Doe";
  console.log("Hello, " + name);
  function inside() {
    console.log("john do");
  }
  inside();
};
// In the case of function expressions, the function is not hoisted, only the variable declaration is,
// which leads to the error when called before initialization.


// Arrow Function Hoisting
var outer = () => {
  var name = "John Doe";
  console.log("Hello, " + name);
};
outer(); // This works because 'let' declarations are not hoisted like 'var'.
// If 'outer()' were called before the 'let outer = () => {}', it would throw a ReferenceError because 'let' and 'const' are in a "temporal dead zone."
