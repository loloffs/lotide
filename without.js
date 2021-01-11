const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`✖ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const eqArray = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
   return '✖ Assertion Failed, the arrays are not equal.';
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return '✖ Assertion Failed, the arrays are not equal.';
    } 
  }
  return '✔ Assertion Passed, the arrays are equal.';
};



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
  console.log(eqArray(actual, expected));
};

//Test case 2
const itDoesNotModifyOriginalArray = function() {
  let originalArray = [1, 2, 3, 4, 5];
  without(originalArray, [4, 3]);
  console.log(eqArray(originalArray, [1, 2, 3, 4, 5]));
};

//Test case 3
const itIgnoresInvalidValues = function() {
  let source = [1, 2, 3, 4, 5];
  let toRemove = ['Luke', true, NaN, false, 42, 1];
  let actual = without(source, toRemove);
  let expected = [2, 3, 4, 5];
  console.log(eqArray(actual, expected));
};


itReturnsAnArrayWithoutGivenElements();
itDoesNotModifyOriginalArray();
itIgnoresInvalidValues();


module.exports = without;
