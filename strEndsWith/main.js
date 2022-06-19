//PREP
//
//parameter - two strings, the first is complete string being checked and the second is the substring being checked
//
//reults - a boolean, true if the substring is the last n characters of the string, false if not
//
//example -
//solution('abcde', 'cde') => true
//solution('abcde', 'abc') => false
//
//pseudocode
//Start - solution(string, substring)
//Set - a variable to the length of the substring
//Check and Return - whether the slice of the string with the length of the substring is deeply equal to the substring
//
const solution = (str, ending) => {
	let lengthOfEnding = ending.length;
	return str.slice(-lengthOfEnding) === ending;
}

console.log(solution('abcde','cde'));
console.log(solution('abcde','abc'));

const solutionOptimized = (str, ending) => {
	return str.endsWith(ending);
}

//didn't know about this string method
