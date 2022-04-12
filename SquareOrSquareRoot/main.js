// If the number has an integer square root, take this, otherwise square the number.

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
var assert = require("assert");

function squareOrSquareRoot(numberArray) {
  const newArray = numberArray.map((number) => {
    if (Math.sqrt(number) % 1 === 0) {
      Math.sqrt(number);
    } else {
      Math.pow(number, 2);
    }
  });
  return newArray;
}

const simple = (array) => {
  return array.map((element) => element * 2);
};

let input = [4, 3, 9, 7, 2, 1];
let expected = [2, 9, 3, 49, 4, 1];
// assert.equal(squareOrSquareRoot(input), expected);

input = [1, 2, 3];
expected = [2, 4, 6];
assert.equal(simple(input), expected);
