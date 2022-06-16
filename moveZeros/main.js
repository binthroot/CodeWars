//PREP

//parameters - takes in an array of values, strings, numbers, or booleans

//returns - an array of the same values in place as the parameter, but with all number 0's placed at the end of the array

//examples
// moveZeros(false,'a','b',0,2,5,'x',0,'q') = false,'a','b',2,5,'x','q', 0, 0

//psuedocode
// function (array)
//

const moveZeros = (array) => {
  countZeros = array.length;
  let resultArray = array.filter((element) => {
    if (element !== 0) {
      countZeros++;
      return true;
    }
  });
  countZeros = array.length - resultArray.length;
  for (let i = 0; i < countZeros; i++) {
    resultArray.push(0);
  }
  return resultArray;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

//optimal answer
var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};

// uses .concat with two filtered arrays, one with 0's one without
