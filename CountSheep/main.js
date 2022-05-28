//PREP

//parameter

//returns

//examples

//psuedo
//iterate through array, filter for only true, return length of new array

const countSheeps = (array) => {
  return array.filter((element) => element === true).length;
};

console.log(countSheeps([true, true, true]));
