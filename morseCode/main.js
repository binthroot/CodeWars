//PREP
//
//parameters - a string of morse code symbols and spaces
//
//results - a translated string of letters, numbers, and spaces
//
//examples
//decodeMorse(... --- ...) => 'SOS'
//
//psuedocode
//
//build a function that uses the Morse dictionary, takes the morse letter and returns
//--the character 
//
//build a function that decodes each word
//  split the word morse code by each space (' ') and map it using the morse dictionary function
//  rejoin the word with no spaces ('') and return it
//
//split your morseCode parameter by each word, which will be three spaces, map each word using the decodeWord function
//rejoin the words together with a space (' ') and return the entire string
decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}
