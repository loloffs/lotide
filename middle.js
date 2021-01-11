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


module.exports = middle;
