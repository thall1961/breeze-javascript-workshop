/**
 *
 *
 * VAR, LET, CONST
 *
 *
 */

// var is either function-scoped or global scoped
var isGLobalScoped = true;
function varFun() {
  var isFunctionScoped = true;
  console.log('FUNCTION', 'isGlobalScoped', isGLobalScoped, 'isFunctionScoped', isFunctionScoped);
}
console.log('GLOBAL', 'isGlobalScoped', isGLobalScoped, 'isFunctionScoped', typeof isFunctionScoped);
varFun();

// this `var` is NOT function scoped, so even though it looks like this variable is set within
// the scope of the if statement, it's still global
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log('USING VAR', x);

// 1. Declare 2 variables (1 using let and 1 using const) inside the if and 2 variables (same way)
// inside the else statement.  Then try logging the values outside the if/else block
if (Math.random() > 0.5) {
  // declare them here
} else {
  // and here
}
// log them here

/* ⚡️ The Temporal dead zone ⚡️ */
if (true) {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}

// The term "temporal" is used because the zone depends on the order of execution (time)
// rather than the order in which the code is written (position). For example, the code
// below works because, even though the function that uses the let variable appears before
// the variable is declared, the function is called outside the TDZ.
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ
}

/**
 *
 *
 * CLOSURES
 *
 *
 */

function init() {
  var name = 'Breeze';
  // displayName() is the inner function, a closure
  function displayName() {
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// 2. Create a closure; declare a function makeAdder that receives a value
// and returns a function that receives another value and returns the sum

// 💰 your closure implemented here
// const add5 = makeAdder(5);
// const add10 = makeAdder(10);
// console.log(add5(2));
// console.log(add10(2));

// example of emulating private methods with closures
const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

// similar closure done a slightly different way
// 3. Create a variable that gets assigned a function very similar to the
// one above with one main difference

// 💰 (notice how the assigned function gets called above
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

// 💰 implemented here
// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1.value());

// counter1.increment();
// counter1.increment();
// console.log(counter1.value());

// counter1.decrement();
// console.log(counter1.value());
// console.log(counter2.value());

/**
 * Notice how the two counters maintain their independence from one another. Each
 * closure references a different version of the privateCounter variable through
 * its own closure. Each time one of the counters is called, its lexical environment
 * changes by changing the value of this variable. Changes to the variable value in
 * one closure don't affect the value in the other closure.
 *
 * Visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures for more info
 */

/**
 *
 *
 * The THIS Keyword
 *
 *
 */
function classroom(teacher) {
  // 4a. return a function that logs the `teacher` passed in and `this.topic`
  // 💰 console.log(`${teacher} says to study ${this.topic}`);
}

// 4b. call the classroom function with a name and assign it to `assignment`
// 4c. call the new assignemnt variable
// 4d. create a variables called `homework` and assign it an object with 2 properties:
// topic: string, assignment: () => void

// the this for 👇 function call will be the homework object
// homework.assignment();

// the this for 👇 function call will be the in-line object
// assignment.call({ topic: 'Math' });

/**
 * there's lots to learn about the `this` keyword, especially for dev's that use
 * JavaScript classes a lot (ng ftw).  More good info can be found here
 * https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch3.md#this-keyword
 */
