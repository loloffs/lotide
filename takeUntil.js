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
const results1 = (data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = (data2, x => x === ',');
console.log(results2);

module.exports = ;
