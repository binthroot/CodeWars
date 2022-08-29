const numProp = (n, p) => {
	let result = String(n).split('').map((el, index) => {
		return Number(el)**(p+index)
	}).reduce((acc, el) => acc + el);
	let remainder = result / n;
	return remainder % 1 > 0 ? -1 : remainder; 
}

const testOne = numProp(89, 1);
const testTwo = numProp(46288, 3);

console.log(testOne)
console.log(testTwo)

//Codewars 6kyu playing with digits - 8.29.2022
