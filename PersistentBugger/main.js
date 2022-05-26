//PREP

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

//parameter - positive number

//result - an integer of the number of times of multiplicative persistence applied

//examples
// persistence(39) -> 3*9 - 27 - 2*7 - 14 - 1*4 - 4 returns => 3

//psuedocode
// set a variable - persistenceNum - with value of num
// set a number variable counter - with value of 0
// while loop - while peristenceNum > 9
//   set a variable acc equal to 1
//   convert persistenceNum into string then split each number
//   for each split number
//      convert it into a num and set acc to be acc*splitNum
//   count++
//   if acc < 10
//      break
//   peristenceNum = acc
//  return count

const persistence = (num) => {
  let persistenceNum = num;
  let counter = 0;
  while (persistenceNum > 9) {
    persistenceNum = String(persistenceNum)
      .split("")
      .reduce((acc, elem) => acc * Number(elem), 1);
    counter++;
  }
  return counter;
};

console.log(persistence(39));
