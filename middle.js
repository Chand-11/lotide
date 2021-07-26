const eqArrays = require('./eqArray');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function (array) {
  let index;
  let midarray = [];
  if (array.length === 1 || array.length === 2) { return midarray; }
  else if (array.length % 2 === 0) {
    index = array.length / 2;
    midarray.push(array[index - 1]);
    midarray.push(array[index]);
  }
  else {
    index = Math.floor(array.length / 2);
    midarray.push(array[index]);
  }

  return midarray;
};

module.exports = middle;