const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:" + actual + "===" + expected);

  }
  else
    console.log("🛑🛑🛑Assertion Failed:" + actual + "!==" + expected);
};

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
/*
const letterPositions = function(sentence) {
    // For each letter, instead of returning just one number to represent 
    // its number of occurrences, multiple numbers may be needed to represent all 
    // the places in the string that it shows up.
  
    // Needs to loop
    const results = {};
    let counter = 0;
  
    for (let char of sentence) {
      if (char !== " "){
        if (!results[char]) {
          results[char] = [counter];
        } else {
          results[char].push(counter);
        }
      }
      counter ++;
    }
   
    console.log(results)
    return results;
    // results should be: { l: [0], i: [1], [11], ... }
  };
  
letterPositions("hello");
*/


const letterPositions = function (sentence) {
  const results = {};
  for (let count = 0; count < sentence.length; count++) {
    //console.log(sentence[count]);
    if (sentence[count] !== " ") {
      if (!results[sentence[count]]) {
        results[sentence[count]] = [count];
      }
      else {
        results[sentence[count]].push(count);
        console.log(results.count);

      }
    }
  }
  console.log(results);
  return results;
}; 

letterPositions("lighthouse in the house");

assertArraysEqual(letterPositions("hello").e, [1]);