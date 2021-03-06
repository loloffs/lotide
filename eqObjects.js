const eqArrays = require("./eqArrays");



const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (!Array.isArray(object2[key])) {
        return false;
      }
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }
      continue;
    }
    if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true;
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 6] };
console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;
