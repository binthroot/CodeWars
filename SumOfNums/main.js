//PREP

//parameters - a and b, two integers that can be positive or negative

//returns - the sum of all numbers between a and b including a and b

//examples
// (0, 1) - > 0 + 1 = 1
// (1, 3) - > 1 + 2 + 3 = 6
// (2, -1) - > 2 + 1 + 0 + -1 = 2

//psuedocode
// func ( a, b)
// assign a and b variables larger and smaller
// assign an variable sum = 0
// (while smaller < larger)
//    sum += smaller (insures the lower number is in the array)
//    smaller++
//  sum += larger;
//  return sum

const getSum = (a, b) => {
  let [larger, smaller] = a > b ? [a, b] : [b, a];
  // could use Math.max and Math.min instead
  let sum = 0;
  while (smaller < larger) {
    sum += smaller;
    smaller++;
  }
  sum += larger;
  return sum;
};

getSum(10, 20);
getSum(20, 10);
getSum(0, 1);
getSum(-1, -3);

const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
  // use Gauss Summation, clever, but not always readable
};
