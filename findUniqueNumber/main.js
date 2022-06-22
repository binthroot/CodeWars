//parameter - an array of numbers, floats or ints
//
//returns - a single number, the one unique non-repeating number in the array
//
//example
//findUniq([1,1,1,2]) => 2
//findUniq([1,2,1]) => 2

//psuedocode
//Start- Function Call (array)
//Set - SameNum variable to empty
//If the first num in array and the second num in  array are the same
//	The similar number is the first num in the array
//Else if the second num in array and the third num in array are the same
//	The first num in array is uniq, return it
//Else if neither of those two things was the case
//	The second num in array is uniq, return it
//Return the array - filtered out of all elements that are SameNum, but on ly it's first value


const findUniq = (arr) => {
	let sameNum;
	if (arr[0] === arr[1]) {
    sameNum = arr[0]
  } else if (arr[1] === arr[2]) {
  	return arr[0]
  } else {
  	return arr[1]
  }
  return arr.filter((element) => {
  	return element !== sameNum;
  })[0]
}
