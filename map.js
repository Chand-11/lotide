function eqArrays(arr1, arr2)
{
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, len = arr1.length; i < len; i++){
      if (arr1[i] !== arr2[i]){
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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  console.log('array: ', array);
  console.log('callback: ', callback);
  const result = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    result.push(callback(item));
  }
  return result;
}
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(map(words,word=>word[1]), ['r','o','o','a','o']);