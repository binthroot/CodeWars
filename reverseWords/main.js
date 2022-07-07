// param - string of letters, spaces

// returns - a string of letters, spaces, but with each word reversed from its original and all spacing being the same

//example

//psuedocode
// Function Def - (inputString)
//  Start -
//  Use split() on string to split by each space, map that to a new array ->
//  Map each word to its reverse (split/reverse/join)
//    If the word is actually a '' charcter -> return the '' to the map unaltered.
//  Finally join the new map array into a new string

function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => {
      if (word == '') return '';
      return word.split('').reverse().join('');
    })
    .join(' ');
}
