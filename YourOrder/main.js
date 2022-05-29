//PREP

//parameter - a string of words each with a number inserted into the word

//returns - sorts the words in the string by numerical value of each words number

//examples -
//

//psuedocode
//turn string into an array
//iterate through array
//  take value of number in each value, use that value to sort the array
// rejoin into a string

const order = (words) => {
  return words
    .split(' ')
    .sort((a, b) => {
      aValue = Number(a.replace(/[^0-9]/g, ''));
      bValue = Number(b.replace(/[^0-9]/g, ''));
      return aValue - bValue;
    })
    .join(' ');
};

console.log(order('It2 This1 It4 Not3'));

const orderOptimized = (words) => {
  words
    .split(' ')
    .sort((a, b) => {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(' ');
};
