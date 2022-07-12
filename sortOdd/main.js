//p - an array of integers
//
//returns - the parameter array but with all even numbers left in place and all odd numbers sorted smallest to largest
//
//example - sortArray([5,8,6,3,4]) => [3, 8, 6, 3, 4]
//
//psuedocode
//Start - function ([array]) =>
// Set - an empty array named OddInts
// Set - a copy of the input array named innerArray
// Map the innerArray
//   Leave the even numbers in place
//   Push the odd numbers to the OddInts array, set their place in innerArray to 0
//Sort the OddInts Array from lowest to highest
//Map the innerArray again
//   Leave the even numbers in place
//   The 0's will be replaced, with each one receiving the 0 index of OddInt, and then removing the element from OddInt
//Return the new innerArray
//

const sortArray = (array) => {
	let oddInts = [];
	let innerArray = [...array];
	//spread operator
	
  innerArray = innerArray.map((number) => {
		if (number % 2 === 0) return number;
		else {
			oddInts = oddInts.concat(number);
			return 'R';
			}
		}
	)

	oddInts.sort((a,b) => a-b);
  console.log(oddInts)
	console.log(innerArray)
	let count = 0;

	return innerArray.map((number)=> {
		if (number === 'R') {
			let temp = oddInts[count];
			count++;
		  return temp;
		} else {
			return number;
		}
	})
	//return innerArray;

	}

const testOne = [5,8,6,3,4];

console.log(sortArray(testOne))

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

//best practice with codewars, filters out the odd into a new array then maps
//very similar to what I was trying to do except much more successful
