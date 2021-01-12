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

module.exports = letterPositions;
