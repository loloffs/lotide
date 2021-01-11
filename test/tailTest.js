const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


console.log(assertArraysEqual(tail([1,2,3,4]), [2,3,4]));
