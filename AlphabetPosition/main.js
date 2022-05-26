//PREP

//In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

//parameter - a string of text

//returns - a string of integers seperated by spaces

//examples
//
//alphabetPosition("a b c d") => "1 2 3 4"

//psuedocode
// iterate through the array
//   ignore any non alpha chars
//   convert char to lowercase and then to an alpha character 1-26, a-z
//   map the char to a new array
// join the new array together

const alphabetPosition = (string) => {
  const re = /[a-zA-Z]/g;
  return string
    .split("")
    .filter((char) => char.match(re))
    .map((char) => char.toLowerCase().charCodeAt() - 96)
    .join(" ");
};

console.log(alphabetPosition("abcd"));
