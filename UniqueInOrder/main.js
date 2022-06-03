//PREP

//parameter - a string of letters

//returns - an array of letters filtered down to only the first letter of a repeating series of letters

//examples
// Unique('AAAAA') => ['A']
// Unqiue('AAAAABBCDD') => ['A', 'B', 'C', 'D']

//psuedocode
//
// make variable prevChar set to no value
// split string into an array
// iterate through and filter list by
//    if prevChar isn't equal to current letter
//        prevChar is set to letter
//        add letter to new array/ return true
//    else
//        return false

const UniqueInOrder = (iterable) => {
  let innerIterable;
  if (typeof iterable == 'string') {
    innerIterable = iterable.split('');
  } else {
    innerIterable = iterable;
  }
  let prevChar;
  return iterable.split('').filter((letter) => {
    if (prevChar != letter) {
      prevChar = letter;
      return true;
    } else {
      return false;
    }
  });
};

console.log(UniqueInOrder('111222333'));

const uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

//utilizes [...iterable] to deconstruct the array or string, and filter(element, index) to check the previous element in the array
