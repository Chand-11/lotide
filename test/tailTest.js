const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  
  it("returns ['Lighthouse', 'Labs'] for tail() of  ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    const w = tail(words); // no need to capture the return value since we are not checking it
    assert.deepEqual(w,['Lighthouse', 'Labs']);
  });

  it("returns ['Labs'] for tail() of ['Lighthouse', 'Labs']", () => {
    const result = tail(['Lighthouse', 'Labs']);
    assert.deepEqual(result, ['Labs']); // ensure second element is "Labs"
  });

  it("returns [] for tail() of empty array", () => {
    const result2 = tail([]);
    assert.deepEqual(result2,[]);
    
  }); 

});