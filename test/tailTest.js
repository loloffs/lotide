const assert = require('chai').assert;
const tail = require('../tail');

describe("#middle", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns ['likes', 'lighthouse'] for ['Luke, 'likes, 'lighthouse']", () => {
    assert.deepEqual(tail(['Luke', 'likes', 'lighthouse']), ['likes', 'lighthouse']); 
  });

});
