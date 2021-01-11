const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//Test case 1
const itWorksWithEvenArray = function(){
  let original = [1, 2, 3, 4];
  let actual = middle(original);
  let expected = [2, 3];
  console.log(assertArraysEqual(actual, expected));
};


//Test case 2
const itWorksWithOddArray = function(){
  let original = [1, 2, 3, 4, 5];
  let actual = middle(original);
  let expected = [3];
  console.log(assertArraysEqual(actual, expected));
};


itWorksWithEvenArray();
itWorksWithOddArray();