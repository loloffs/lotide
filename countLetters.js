const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`✖Assertion Failed: [${actual}] !== [${expected}]`);
  }
};



const countLetters = function(sentence) {
  let obj = {};
  for (let i = 0; i < sentence.length; i++) {
    if (obj[sentence[i]]) {
      obj[sentence[i]]++;
    } else {
      obj[sentence[i]] = 1;
    }
  }
  delete obj[' '];
  return obj;
};

console.log(countLetters('hey its me luke'));

console.log(countLetters('this is a test string'));

module.exports = countLetters;