//PREP

//parameter - takes a string and an non-negative integer

//returns - returns the string parameter repeated the number of times as the
//          integer parameter

//examples
//  repeatString("Yes", 6) => "YesYesYesYesYesYes"

//psuedo
//  set a new variable, newString, with an empty string
//  make a for loop that loops the number of times as the integer parameter
//     at each loop, concatenate the string parameter onto the newString
//  return the newString

const repeatString = (integer, string) => {
  let newString = "";
  for (let i = 0; i < integer; i++) {
    newString += string;
  }
  return newString;
};

let test = repeatString(6, "Yes");
console.log(test);

// new best practice, using repeat function
const repeatStringUpdate = (integer, string) => {
  return string.repeat(integer);
};

let testTwo = repeatStringUpdate(7, "hello");
console.log(testTwo);
