const eqArrays = require('./eqArray');

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("โโโ Assertion Passed:");
  }
  else
    console.log("๐๐๐Assertion Failed:");
};

module.exports = assertArraysEqual;
