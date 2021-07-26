const assertEqual = require('../assertEqual');
const head = require('../tail');

//TEST CODE
 
const words = ["Yo Yo", "Lighthouse", "Labs"];
const w = tail(words); // no need to capture the return value since we are not checking it
assertEqual(w.length, 2); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const result1 = tail(["Hello"]);
assertEqual(result1.length,0);

const result2 = tail([]);
assertEqual(result2.length,0);