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
const sandwich = { ...pb, a: 'a', n: 'n', d: 'd', ...jelly };
console.log('sandwich', sandwich);

// destructuring objects
const input = {
  the: {
    holy: 'cow',
    the: 'beginning'
  },
  big: 99,
  picture: ['as', 'it', 'were']
};
const { the, big, picture } = input;
console.log('the', the, 'big', big, 'picture', picture);

const anotherInput = {
  data: {
    big: 'red'
  }
};
function go({ data }) {
  console.log(data.big);
}
go(anotherInput);

function lotsOfInputs({ lots, of, inputs }) {
  console.log('nice!', lots, of, inputs);
}
const lotsOfInputsObject = {
  lots: ['dog', 'cat'],
  of: 'hi',
  inputs: ['input']
};
lotsOfInputs({ ...lotsOfInputsObject });

/**
 * Arrays
 */
const cool = ['cool'];
const beans = [' ', 'b', 'e', 'a', 'n', 's'];
const coolBeans = [...cool, [...beans].join('')].join('');
console.log(coolBeans);

const [peanutButter, honey] = getSandy();

function getSandy() {
  return ['peanut butter', 'honey'];
}

console.log(peanutButter, honey);

/**
 * Async Await
 */
// fetch('https://dog.ceo/api/breeds/image/random', {
//     method: 'GET'
// }).then(response => response.json())
// .then(data => open(data.message));

(async function get() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random', {
    method: 'GET'
  });
  const data = await response.json();
  open(data.message);
})();
