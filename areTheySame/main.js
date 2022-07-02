//parameters - two arrays, both of integers in no particular order
//
//returns - a boolean value, true or false
//true if the elements in array b are a multiplicity (12*12) of the elements in array a, regardless of order
//
//examples
//comp([12,13,14],[144,169,196]) => true
//
//psuedocode
//
//Function comp(array a, array b)
//Start -
//Define a callback function to sort arrays
//Set Variable - multA - to the array a mapped to a new array where
//->each element = element*element
//Return (array b - sorted with the callback) is equal to (array multA - sorted with the callback)
//
const comp = (a, b) => {
	let multA = a.map((element) => element*element);
	return JSON.stringify(multA.sort()) === JSON.stringify(b.sort());
}

let arrayA = [12,13,14];
let arrayB = [144,169,196];

console.log(comp(arrayA, arrayB));
