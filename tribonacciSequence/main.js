//PREP

//parameters - a signature of the first 3 numbers of the sequence, and n, the length of the total sequence
// each number after the 3rd is determined by the 3 numbers summed before it

//example
// tribonacci([1,1,1],10) => [1,1,1,3,5,9,17,31,57,105]

//pseudocode

// unpack the signature to a newArray
// set a for loop that starts at index=3 and ends when newArray.length >= 10
// return the newArray

const tribonacci = (signature, n) => {
  newArray = [...signature];
  if (n < 4) {
    return newArray.slice(0, n);
  }
  for (index = 3; newArray.length < 10; index++) {
    newArray.push(
      newArray[index - 1] + newArray[index - 2] + newArray[index - 3]
    );
  }
  return newArray;
};

console.log(tribonacci([1, 1, 1], 1));
