//PREP

//parameter - an array of 0's or 1's

//returns - an integer equal to the binary of the parameter array

//example
//binaryArrayToNumber([0,0,0,1]) => 1
//binaryArrayToNumber([0,1,0,1]) => 5
//binaryArrayToNumber([1,0,0,1]) => 9

//psuedocode
//START - function(array)
// set a variable to hold the reverse of the array
// set a variable to hold the sum, initialized at 0
// for loop over the length of the array
//    if argument, checks if the index of the reversed array is a 1
//       adds 2 to the power of the index to sum if so
// return the sum

const binaryArrayToNumber = (array) => {
  let loopArray = array.reverse();
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (loopArray[i] === 1) {
      sum += Math.pow(2, i);
    }
  }
  return sum;
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 1, 0, 1]));
console.log(binaryArrayToNumber([1, 0, 0, 1]));

const binaryArrayToNumberOptimized = (arr) => parseInt(arr.join(''), 2);
