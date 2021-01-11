const assertEqual = require('../assertEqual');
const head = require('../head');


const testIfItReturnsHeadOfArr = function(arr) {
  let actual = head(arr);
  let expected = 'an';
  assertEqual(actual, expected);
}

testIfItReturnsHeadOfArr(['an', 'arr']);