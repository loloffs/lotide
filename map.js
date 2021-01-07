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


const assertArrayEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
   return '✖Assertion Failed, the arrays are not equal.';
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return '✖ Assertion Failed, the arrays are not equal.';
    } 
  }
  return '✔ Assertion Passed, the arrays are equal.';
};


const words = ["ground", "control", "to", "major", "tom"];


//Map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);



//Test case 1

const testCaseOne = function() {
  let originalArray = ['Hi', 'my', 'name', 'is', 'Luke'];
  let actual = map(originalArray, word => word[0]);
  let expected = ['H', 'm', 'n', 'i', 'L'];
  console.log(assertArrayEqual(actual, expected));
};

testCaseOne();


//Test case 2

const testCaseTwo = function() {
  let originalArray = ['Hi', 'my', 'name', 'is', 'Luke'];
  let actual = map(originalArray, word => word.length);
  let expected = [2, 2, 4, 2, 4];
  console.log(assertArrayEqual(actual, expected));
};

testCaseTwo();