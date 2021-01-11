const { builtinModules } = require("module");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`✖Assertion Failed: [${actual}] !== [${expected}]`);
  }
};



//This one
const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }    
  } 
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let test = findKeyByValue(bestTVShowsByGenre, "The Wire");

console.log(test);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;