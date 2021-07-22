const assertEqual = function(actual, expected) {
  if(actual === expected)
  {
    console.log("Assertion Passed:" + actual + "===" + expected);
  
  }
  else
  console.log("🛑🛑🛑Assertion Failed:" + actual + "!==" + expected);
  };

  
  const countLetters = function(input)
  {
 const result = {};
 const count = 0;
 for(const letter of input)
 {   
   if (result[letter])
   {
   result[letter] += 1;
   }
   else
   {
    result[letter] = 1;
    
   }

   //console.log(letter);
 }

 //console.dir(result);
 return result;
  };

  console.log(countLetters("lighthouse in the house"));