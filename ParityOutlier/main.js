// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes the array
// as an argument and returns this "outlier" N.

//PREP - parameters, returns, examples, psuedocode

// parameters - an array of at least length 3 -> very large (containing integers)
// this array is either all odd or all even expect for a single integer

// returns -> a single integer

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// psuedocode
// check first middle and last value of array, at least two will match even or odd
// filter array by the opposite value, leaving one value left over

const parityOutlierFinder = (array) => {
  //   let even = 0;
  //   let odd = 0;

  //   [array[0], array[1], array[2]].forEach((element) =>
  //     array % 2 === 0 ? even++ : odd++
  //   );

  //   // this is a better way to do above
  //   array.slice(0,3).filter(isEven).length >= 2 ?
  //     array.find(isEven) : array.find(isOdd);

  //   array.filter((element) => {
  //     if (even > odd) {
  //       return element % 2 === 0;
  //     } else {
  //       return element % 2 > 0;
  //     }
  //   });

  //   return array[0];

  // this is a better way to do above using the .find built in method and two helper functions
  return array.slice(0, 3).filter(isEven).length >= 2
    ? array.find(isOdd)
    : array.find(isEven);
};

const isEven = (num) => num % 2 === 0;

const isOdd = (num) => !isEven(num);

console.log(parityOutlierFinder([2, 4, 0, 100, 4, 11, 2602, 36]));
// returns 11

console.log(parityOutlierFinder([160, 3, 1719, 19, 11, 13, -21]));
// returns 160
