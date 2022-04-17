// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(array) {
  let mySet = new Set(array);
  mySet.forEach((element) => {
    console.log(
      `Element is ${element} and has length  ${
        array.filter((number) => number === element).length
      }`
    );
    if (array.filter((number) => number === element).length % 2 !== 0) {
      console.log(element);
      return element;
    }
  });
}

let myArray = [2, 2, 2, 2, 6, 6, 6];
findOdd(myArray);

myArray = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
findOdd(myArray);
