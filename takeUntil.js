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





//Take until
const takeUntil = function(array, callback) {
  let newArray = [];
  
  for (const something of array) {
    if (!callback(something)) {
      newArray.push(something);
    } else {
      return newArray;
    }
  }
  return newArray;
}




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);