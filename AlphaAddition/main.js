// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'

function addLetters(...letters) {
  let letterSum = 0;
  const asciiAdj = 96;

  [...letters].forEach((letter) => {
    letterSum += letter.charCodeAt(0) - asciiAdj;
    if (letterSum > 26) letterSum -= 26;
  });

  if (letterSum == 0) return "z";
  return String.fromCharCode(letterSum + asciiAdj);
}

// a = 1   b = 2   c = 3     sum = 6   should give us 'f  =   6'
// a = 97  b = 98  d = 99

let testOne = "abc".split("");
let print = addLetters(...testOne);

console.log(print);

testOne = "z".split("");
print = addLetters(...testOne);

console.log(print);

testOne = "".split("");
print = addLetters(...testOne);

console.log(print);
