const eqArray = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
   return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};


//This one
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (!Array.isArray(object2[key])) {
        return '✖ Assertion Failed, the objects are not equal.';
      }
      if (!(eqArray(object1[key], object2[key]))) {
        return '✖ Assertion Failed, the objects are not equal.';
      }
      continue;
    }
    if (object1[key] !== object2[key]) {
      return '✖ Assertion Failed, the objects are not equal.';
    }
  }
  return `✔ Assertion Passed, the objects are equal: ${inspect(object1)} === ${inspect(object2)}`;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 6] };
console.log(assertObjectsEqual(cd, cd2)); // => false

module.exports = assertObjectsEqual;