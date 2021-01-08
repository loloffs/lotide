const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`✖Assertion Failed: [${actual}] !== [${expected}]`);
  }
};




const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    } 
  }
  return undefined; 
};


//Test Cases: 

const testCaseOne = function() {
  const cars = {
    'honda': "fit",
    'toyota': "prius",
    'maxda': "three"
  }
  let actual = findKey(cars, x => x === 'prius');
  let expected = "toyota";
  assertEqual(actual, expected);
};

testCaseOne();

const testCaseTwo = function() {
  const randomTestObj = {
    'orange ': true,
    spicy: undefined,
    'meaning of life': 42
  }
  let actual = findKey(randomTestObj, x => x === undefined);
  let expected = "spicy";
  assertEqual(actual, expected);
};

testCaseTwo();


//Test case from compass
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); 
