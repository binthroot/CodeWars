//P - a string of ( or ) characters
//
//R - a boolean value if the set of parenthesis characters is valid
//
//E - validParens('(())') => true
//  - validParens(')((') => false
//
//P -
//Start - Func(string)
//Set - opening = 0
//Set - closed = 0
//For loop (over string)
//  if (closed > opening) return false
//  else if ('(') opening =+ 1
//  else if (')') closed =+ 1
//return (opening === closed)
//
const validParens = (parens) => {
	let openParens = 0;
	let closedParens = 0;
	for (const paren of parens) {
		if (closedParens > openParens) {
			return false;
		} else if (paren === '(') {
			openParens += 1;
		} else if (paren === ')') {
			closedParens += 1;
		}
	}
	return (openParens === closedParens)
}

let test = validParens('(())')
console.log(test)
let testTwo = validParens(')(')
let testThree = validParens('(((((((()))))))')
console.log([testTwo, testThree])
