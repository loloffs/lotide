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



const middle = function(arr) {
  let middleValue = [];
  let length = arr.length;
  let evenMiddle = length/2;
  let oddMiddle = Math.floor(length/2);
  let invalid = [];
  if ((length === 2) || (length === 1)) {
    return invalid;
    } else if (length % 2 === 0) {
      middleValue.push(arr[evenMiddle-1]);
      middleValue.push(arr[evenMiddle]); 
    } else if (length % 2 > 0) {
      middleValue.push(arr[oddMiddle]);
    }
  return middleValue;
};



//Test case 1
const itWorksWithEvenArray = function(){
  let original = [1, 2, 3, 4];
  let actual = middle(original);
  let expected = [2, 3];
  console.log(assertArrayEqual(actual, expected));
};


//Test case 2
const itWorksWithOddArray = function(){
  let original = [1, 2, 3, 4, 5];
  let actual = middle(original);
  let expected = [3];
  console.log(assertArrayEqual(actual, expected));
};


itWorksWithEvenArray();
itWorksWithOddArray();
