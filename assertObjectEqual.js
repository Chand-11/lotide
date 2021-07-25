// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(obj1, obj2) {
    // Implement me!
    const inspect = require('util').inspect;
   
    if(eqObjects(obj1,obj2) === true)
    {
      console.log("Assertion Passed:" + inspect(obj1) + "===" + inspect(obj2));
    
    }
    else
    console.log("🛑🛑🛑Assertion Failed:" + inspect(obj1) + "!==" + inspect(obj2));
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
        if(result !== true)
        {return  false;}
    }
    else if(obj1[key1] !== obj2[key1]){
        return false;
    }                
    }
    return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);
