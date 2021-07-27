const assert = require('chai').assert;
const middle = require('../middle');

describe("middle", () => {

  it("returns empty array [] for middle() of [1]", () => {
    const inputArray = middle([1]);
    const expectedarray = [];
    assert.deepEqual(inputArray, expectedarray);
  });

  it("returns empty array [] for middle() of [1, 2]", () => {
    const inputArray = [1, 2];
    assert.deepEqual(middle(inputArray), []);
  });

  it("returns [2] for middle() of  [1, 2, 3]", () => {
    const inputArray = [1, 2, 3];
    assert.deepEqual(middle(inputArray), [2]);

  }); 
  it("returns [3] for middle() of  [1, 2, 3, 4, 5]", () => {
    const inputArray =  [1, 2, 3, 4, 5];
    assert.deepEqual(middle(inputArray), [3]);

  }); 
  it("returns [2,3] for middle() of [1, 2, 3, 4]", () => {
    const inputArray = [1, 2, 3,4];
    assert.deepEqual(middle(inputArray),[2,3]);

  }); 
  it("returns [3, 4] for middle() of  [1, 2, 3, 4, 5, 6]", () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(middle(inputArray), [3, 4]);

  }); 

});









/* const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TestCode

assertArraysEqual((middle([1]), []));
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); */