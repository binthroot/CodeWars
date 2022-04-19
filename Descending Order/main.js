// Your task is to make a function that can take any non-negative integer as
// an argument and return it with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(num) {
  //split number in an array of numbers
  let array = ("" + num).split("");
  console.log(array);
  array = array.map((digit) => {
    parseInt(digit);
  });
  console.log(array);

  array.sort((a, b) => {
    return a - b;
  });
}

console.log(descendingOrder(213432553253253243));

// sorting numbers using .sort example
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
