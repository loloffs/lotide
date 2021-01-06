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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`✖Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const letterPositions = function(sentence) {
  let obj = {};
  for (let i = 0; i < sentence.length; i++) {
    if (obj[sentence[i]]) {
      obj[sentence[i]].push(i);
    } else {
      obj[sentence[i]] = [i];
    }
  }
  delete obj[' '];
  return obj;
};



console.log(letterPositions('this is a test'));

console.log(letterPositions('hello'));
