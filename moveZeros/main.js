//PREP

//parameters - takes in an array of values, strings, numbers, or booleans

//returns - an array of the same values in place as the parameter, but with all number 0's placed at the end of the array

//examples
// moveZeros(false,'a','b',0,2,5,'x',0,'q') = false,'a','b',2,5,'x','q', 0, 0

//psuedocode
// function (array)
//

const moveZeros = (array) => {
  countZeros = 0;
  let resultArray = array.filter((element) => {
    if (element !== 0) {
      countZeros++;
      return true;
    }
  });
  for (let i = 0; i < countZeros; i++) {
    resultArray.push(0);
  }
  return resultArray;
};

console.log(moveZeros(['a', 'b', 0]));
