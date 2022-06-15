//PREP

//parameter - a string of printer codes
//

//results - a string with the format "{number}/{number}" representing number of errors in the string

//errors are defined as characters not from [a-m]

//examples

//pseudocode
// function call (printerString)
//make a correctLetterArray with letters [a,b,c.....m]
//set a variable count to 0
//loop through the string
//  for each character not in the cLArray
//      iterate count
// return string 'count/printerString.length'

const printerErrors = (s) => {
  const correctLetterArray = 'abcdefghijklm'.split('');
  console.log(correctLetterArray);
  let count = 0;
  for (const letter of s) {
    if (correctLetterArray.indexOf(letter) === -1) {
      count++;
    }
  }
  return `${count}/${s.length}`;
};

console.log(printerErrors('aaaabcdefefda'));
console.log(printerErrors('aaaabcdexxxxxfefda'));

// regex method
const printerError = (s) => `${s.replace(/[a-m]/gi, '').length}/${s.length}`;
//eliminates all non error letters and counts the resulting string
