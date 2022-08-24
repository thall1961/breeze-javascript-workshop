/**
 * VAR, LET, CONST
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

// will throw an error because y and z are block-scoped and declared only in the if statement
// if (Math.random() > 0.5) {
//   let y = 1;
//   const z = 1;
// } else {
//   let y = 2;
//   const z = 2;
// }
// console.log('USING LET & CONST', y, z);

// ⚡️ The Temporal dead zone ⚡️
// if (true) {
//   console.log(bar); // undefined
//   console.log(foo); // ReferenceError
//   var bar = 1;
//   let foo = 2; // End of TDZ (for foo)
// }

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
 * CLOSURES
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

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

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
const makeCounter = function () {
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
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.

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
  return function study() {
    console.log(`${teacher} says to study ${this.topic}`);
  };
}
const assignment = classroom('Tom');
assignment();

const homework = {
  topic: 'History',
  assignment
};
// the this for 👇 function call will be the homework object
homework.assignment();

// the this for 👇 function call will be the in-line object
assignment.call({ topic: 'Math' });
