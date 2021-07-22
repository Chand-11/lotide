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

myArray = myArray.filter( function( el ) {
  return !toRemove.includes( el );
} );
/*function without(source,itemtoremove)
{
  let output = [];
  for (let i = 0, len = itemtoremove.length; i < len; i++) {
    {
      for(let j=0; j < source.length; j++){
        if(source[i] === itemtoremove[j])
        {continue;
        }
        else
        output.push(source[i]);
    }
  }
}
    
  return output;

}*/

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]) ); // => ["1", "2"]

// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"])