const eqArrays = require("./eqArrays");


const without = function(source, toRemove) {
  let newArr = source;
  for (let i = 0; i < toRemove.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] === toRemove[i]) {
        newArr = newArr.filter(el => el !== toRemove[i]);
        break;
      }
    }
  }
  return newArr;
};



//Test case 1
const itReturnsAnArrayWithoutGivenElements = function() {
  //Setup
  let source = [1, 2, 3, 4, 5];
  let toRemove = [4, 3];
  //Execute
  let actual = without(source, toRemove);
  let expected = [1, 2, 5];
  //Assertion
  console.log(eqArrays(actual, expected));
};

//Test case 2
const itDoesNotModifyOriginalArray = function() {
  let originalArray = [1, 2, 3, 4, 5];
  without(originalArray, [4, 3]);
  console.log(eqArrays(originalArray, [1, 2, 3, 4, 5]));
};

//Test case 3
const itIgnoresInvalidValues = function() {
  let source = [1, 2, 3, 4, 5];
  let toRemove = ['Luke', true, NaN, false, 42, 1];
  let actual = without(source, toRemove);
  let expected = [2, 3, 4, 5];
  console.log(eqArrays(actual, expected));
};


itReturnsAnArrayWithoutGivenElements();
itDoesNotModifyOriginalArray();
itIgnoresInvalidValues();


module.exports = without;
