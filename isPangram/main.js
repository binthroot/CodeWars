//PREP

//parameters - a string of characters

//returns - a boolean, true of false, whether or not the string of characters contained each letter of the alphabet

//examples

//pseudocode
//isPangram(string)
//create a map object - this will record if we've seen that letter or not
//
//string with a replace function to remove all characters that aren't letter
//
//string with to lower case then a forEach where we'll map each letter to our map object
//if the letter exist we'll create a map property 'letter:true'
//
//finally we'll return (map.size === 26), which will either be true or false
//
const isPangram = (string) => {
  let letterMap = new Map();
  const regex = /[^a-zA-Z]/gi;

  let newString = string.replace(regex, '').toLowerCase();
  for (const letter of newString) {
    letterMap.set(letter, true);
  }
  return letterMap.size === 26;
};

console.log(isPangram('abadjdjfa88hf28rhfsn;danvd;sa.,.cz'));
