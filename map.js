const assertArraysEqual = require("./assertArraysEqual");



const words = ["ground", "control", "to", "major", "tom"];


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
  console.log(assertArraysEqual(actual, expected));
};

testCaseOne();


//Test case 2

const testCaseTwo = function() {
  let originalArray = ['Hi', 'my', 'name', 'is', 'Luke'];
  let actual = map(originalArray, word => word.length);
  let expected = [2, 2, 4, 2, 4];
  console.log(assertArraysEqual(actual, expected));
};

testCaseTwo();

module.exports = map;
