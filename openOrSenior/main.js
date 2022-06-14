//PREP

//parameter - an array of arrays with two numbers [age, handicap]
// age is a positive integer, handicap is between -2 and 26

//returns - an array of strings, either 'Open' or 'Senior'

// examples
// openOrSenior([18,20],[61,2]) => ('Open','Senior')

// psuedocode
// using map function iterate through each subarray
//   if (subarray[1] > 7 && subarray[0] >= 55)
//      map new array to 'Senior'
//   else
//      map new array to 'Open'

const openOrSenior = (data) => {
  return data.map((element) => {
    if (element[0] >= 55 && element[1] > 7) return 'Senior';
    return 'Open';
  });
};

// a better approach that uses destructuring for readability
const openOrSeniorImproved = (data) => {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? 'Senior' : 'Open'
  );
};

let test = [
  [18, 2],
  [55, 8],
  [61, 6],
];
console.log(openOrSenior(test));
