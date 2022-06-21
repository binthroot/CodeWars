//parameter - string of characters

//returns - an array of double characters

//example -

//psuedocode
//Start - solution(string)
// for loop that iterates 2 places

const solution = (str) => {
  let strCopy = str.slice();
  if (str.length % 2 === 1) strCopy = strCopy.concat('_');
  let arraySolution = [];
  for (let index = 0; index < str.length; index += 2) {
    arraySolution.push(strCopy.slice(index, index + 2));
  }
  return arraySolution;
};

console.log(solution('abc'));
console.log(solution('abcd'));
console.log(solution('abcde'));
console.log(solution('abcdef'));
