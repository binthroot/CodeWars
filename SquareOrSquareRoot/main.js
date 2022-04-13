// If the number has an integer square root, take this, otherwise square the number.

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
var assert = require("assert");

function squareOrSquareRoot(numberArray) {
  return numberArray.map((number) => {
    return Math.sqrt(number) % 1 === 0
      ? Math.sqrt(number)
      : Math.pow(number, 2);
  });
}

const simple = (array) => {
  return array.map((element) => element * 2);
};

let input = [4, 3, 9, 7, 2, 1];
let output = [2, 9, 3, 49, 4, 1];
expected(squareOrSquareRoot(input)).toEqual(output);

input = [1, 2, 3];
output = [2, 4, 6];
assert.equal(simple(input), output);
