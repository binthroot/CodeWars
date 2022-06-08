//PREP

//parameters

//a string of characters

//returns

//boolean of true or false, true is there are 4 or 6 digits

//examples

//validatePin('1234') => true
//validatePin('12345') => false
//validatePin('a234') => false

//psuedocdoe
// validatePin(string)

// if (string.length not equal to 4 or 6) return false

// iterate through string, each char
//   if char is not a number
//     return false

// return true

const validatePin = (pin) => {
  pinCopy = pin.replace(' ', '');
  if (pinCopy.length !== 4 && pinCopy.length !== 6) {
    return false;
  }
  for (const char of pin) {
    if (isNaN(char)) return false;
  }
  return true;
};

console.log(validatePin('1234'));
console.log(validatePin('12345'));
console.log(validatePin('a234'));
console.log(validatePin('123   '));

//very intuitive regex solution

const validatePIN = (pin) => {
  return /^(\d{4}|\d{6})$/.test(pin);
};

// \d{4} - 4 digits
// \d{6} - 6 digits
// the pipe is an or
// ^ carat at the front and $ at the end of the () signifies the whole string, with nothing else allowed expect either of those two regex options
//.test is a regex string method that test the string and returns a boolean
