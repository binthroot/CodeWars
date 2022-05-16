//PREP

//parameters - string of characters

//returns - a string of characters comprised of either '(' or ')' where in
//          - replaces the character with '(' if the character only appears once
//          - replaces the character with ')' if the character appears > 1

//examples
// duplicateEncode('din')      => returns '((('
// duplicateEncode('ddd')      => returns ')))'
// duplicateEncode("Success")  =>  ")())())"
// duplicateEncode("(( @")      =>  "))(("

const duplicateEncode = (string) => {
  let charMap = new Map();
  let stringCopy = string.toLowerCase();
  for (let char of stringCopy) {
    charMap.has(char) ? charMap.get(char).val++ : charMap.set(char, { val: 1 });
  }

  return stringCopy
    .split("")
    .map((char) => {
      return charMap.get(char).val === 1 ? "(" : ")";
    })
    .join("");
};
