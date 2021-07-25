function eqArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    else
    for (var i = 0, len = arr1.length; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
const assertEqual = function(actual, expected) {
    
      
    if(actual === expected)
    {
      console.log("Assertion Passed:" + actual + "===" + expected);
    
    }
    else
    console.log("🛑🛑🛑Assertion Failed:" + actual + "!==" + expected);
    };
  
    function eqObjects(obj1, obj2)
    {
        const obj1keys = Object.keys(obj1);
        const obj2keys = Object.keys(obj2);

        if(obj1keys.length !== obj2keys.length)
        {
            return false;
        }
        for (const key1 of obj1keys) {

        if(Array.isArray(obj1[key1]))
        {
            let result = eqArrays(obj1[key1],obj2[key1]);
            //console.log("result" + result);
            if(result !== true)
            {return  false;}
        }
        else if(obj1[key1] !== obj2[key1]){
            return false;
        }                
        }
        return true;
    }

/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); 

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
 */


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc));
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
