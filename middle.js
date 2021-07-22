const eqArrays = function (arr1, arr2) {
  //console.log(arr2.length);
  if (arr1.length !== arr2.length) {
    return false;
  }
  else {
    for (var i = 0, len = arr1.length; i < len; i++)
      if (arr1[i] !== arr2[i]) {
        return false;
      }


  }};

  const assertArraysEqual = assertArraysEqual(arr1, arr2)
  {
    if(eqArrays(arr1, arr2) === true)
    {
    console.log("✅✅✅ Assertion Passed:");
    }
    else
       {    console.log("🛑🛑🛑Assertion Failed:");
  }
};

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

assertArraysEqual((middle([1]), []));
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);