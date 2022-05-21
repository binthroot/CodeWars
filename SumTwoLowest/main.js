//PREP

//parameters -> an array of integers with a least 4 numbers

//results -> a single integer that is the sum of the two lowest integers in the array

//exampes
// sumTwoSmallestNumbers([1,2,3,4]) => 3 (sum of 1 and 2)

//psuedocode

//create object with two properites, smallest and nextSmallest, both at 0
//iterate through array - for loop
//  if element < obj.smallest
//    obj.nextSmallest is assigned val of obj.smallest
//    obj.smallest is assigned val of element
//  else if element < obj.nextSmallest
//    obj.nextSmallest is assigned val of element
//return the sum of obj.smallest and obj.nextSmallest

//copy the array
//sort the ne warray, smallest to largest
//return the sum of the first and second elements of the array

const sumOfTwoSmallestNumbers = (intArray) => {
  arrayCopy = [...intArray];
  arrayCopy.sort((a, b) => a - b);
  return arrayCopy[0] + arrayCopy[1];
};

testArrayOne = [1, 2, 3, 4, 5];
console.log(sumOfTwoSmallestNumbers(testArrayOne));
console.log("Test");
