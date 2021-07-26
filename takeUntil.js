function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ Assertion Passed:");
  }
  else
    console.log("🛑🛑🛑Assertion Failed:");
}


const takeUntil = function (array, callback)
{
    //console.log('array', array);
    //console.log('callback', callback);
    const res = [];
    for (const item of array) {
        if(callback(item))   //checks condition of callback
        {
            return res;      //if true then ignore
        }
        res.push(item);      //add to the result array
    }
  return res;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const result1 = takeUntil(data1, each => each <0);
console.log(result1);
assertArraysEqual(result1,[1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ]);
