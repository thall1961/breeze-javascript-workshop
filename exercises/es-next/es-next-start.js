const open = require('open');

/**
 *
 *
 * Covering many ES2018 features
 *
 *
 */

/**
 * Objects
 */
// Spreading objects
const jelly = {
  j: 'j',
  e: 'e',
  l: 'l',
  i: 'i'
};
const pb = {
  p: 'p',
  b: 'b'
};
// 1. spread jelly and pb into a sandwich variable
// console.log('sandwich', sandwich);

// destructuring objects
const input = {
  the: {
    holy: 'cow',
    the: 'beginning'
  },
  big: 99,
  picture: ['as', 'it', 'were']
};
// 2. Destruct input into `the`, `big`, and `picture` const variables
// console.log('the', the, 'big', big, 'picture', picture);

// 3a. create an object with at least one property
// 3b. create a function that desctructs the parameter
// 3c. call the function

function lotsOfInputs({ lots, of, inputs }) {
  console.log('nice!', lots, of, inputs);
}
const lotsOfInputsObject = {
  lots: ['dog', 'cat'],
  of: 'hi',
  inputs: ['input']
};
// 4. call `lotsOfInputs` by spreading the `lotsOfInputsObject` object

/**
 * Arrays
 */
const cool = ['cool'];
const beans = [' ', 'b', 'e', 'a', 'n', 's'];
// 5a. spread `cool` and `beans` into a new variable
// 5b. spread `cool` and `beans` into a new variable and use the `join('')` method to make
// it look like 'cool beans' is logged to the console
// console.log(coolBeans);


// 6. create a function that returns a tuple (an array with two values)
// const [peanutButter, honey] = getSandy();
// console.log(peanutButter, honey);

/**
 * Async Await
 */
// 7. Use the dogs api (https://dog.ceo/api/breeds/image/random) to log the returned message to the console
