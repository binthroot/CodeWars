//PREP

//parameter - string of text structured like an english quote

//returns - string of text with the first letter of each " " seperated word being capitalized

//examples
// jadenString("I have to see what I cannot") => "I Have To See What I Cannot"

//psuedocode

// seperate the string into an array of strings with each word
// replace each word with a version where the first letter is capitalized
// rejoin the array into a string
// return the string

const jadenString = (stringQuote) => {
  return stringQuote
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log(jadenString("i can't see anything now"));
