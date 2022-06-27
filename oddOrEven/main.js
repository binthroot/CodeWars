// p - an array of integers, positive or negative
//
// r - one of two results, even or odd
//
// examples
// oddOrEven([1,2,3]) => 'even'
// oddOrEven([-1,-5,0]) => 'odd'
// oddOrEven([]) => 'even'
//
// psuedo
// Start - function(array)
// Reduce the array into a sum of all of the elements, set 0 as initial value
// Ternary operator on the result, % 2 === 0, true - 'even', false - 'odd'


n oddOrEven(array) {
	  return array.reduce((acc,elem) => acc+=elem,0) % 2 === 0 ? 'even' : 'odd';
	
}
