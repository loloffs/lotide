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

console.log(eqArray([1, 2, 3], [1, 2, 3])); //should be true
console.log(eqArray([1, 2, 3], [3, 2, 1])); //should be false