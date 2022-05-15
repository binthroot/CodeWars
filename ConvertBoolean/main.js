//PREP
// Complete the method that takes a boolean value and
// return a "Yes" string for true, or a "No" string for false.

//parameters - bool -> a boolean value that will be either true or false

//results - returns a string of either "Yes" or "No"

//examples
// boolToWord(true)  -> Output: "Yes"
// boolToWord(false) -> Output: "No"

//psuedocode -

// ternary operator - bool is true ? its true return string "Yes" : its false return string "No"

const boolToWord = (bool) => (bool ? "Yes" : "No");

console.log(boolToWord(true));
console.log(boolToWord(false));
