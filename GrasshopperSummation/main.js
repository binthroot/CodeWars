//PREP

//parameters -> a non negative integer greater than 1

//returns -> a string of all of the summations from 1 to the numbers

//examples ->
// summation(5) => 1 + 2 + 3 + 4 + 5

//psuedo
// initialize a stringSum variable with a value of the string "1"
// for each loop starting at i=1 and looping up to parameter integer
//   concatenate the value of " + " and the next i value onto the string
// return the string

const summation = (num) => {
  stringSum = "1";
  for (let i = 2; i < num + 1; i++) {
    stringSum += ` + ${i}`;
  }
  return stringSum;
};

console.log(summation(5));
