//p - integer of the target number
//
//r - returns either an array of divisors: from 2 up to the target number, not inluding it
//
//e - 
//
//pseudo
//
//function divisors (integer)
//Start -
//Set - divisorArray to an empty Array
//Loop - for loop that loops from 2 up to the integer (not including it)
//  If the (parameter integer) divided by the (current loop i) is an integer
//			Add the current loop i to the divisorArray at the end
//Return - If the divisorArray is less the length 1, a string saying integer is prime
//Else if the divisorArray is greater than length 1, return the divisorArray

const divisors = (integer) => {
	  let divisorArray = [];
	for (let i = 2; i < integer; i++) {
		    if (integer / i % 1 === 0) divisorArray.push(i)
		  
	}
	  return (divisorArray.length < 1) ? `${integer} is prime` : divisorArray;
	
};
