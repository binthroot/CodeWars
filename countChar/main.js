//p - a string of characters

//returns - an object with properties of each character and values corresponding to how many times it appears

//exampes ('aabbc') = returns - {'a':2, 'b':2,'c':1};

//psuedocode
//Func Start - (string)
// Set - empty object named letterObject = {}
// For loop over the indexes of the string
//   If the index is in the letterObject
//     Add one to the value of that property
//   Else
//     The property doesn't exist yet and we create it and set to 1
// Return the letterObject

const count = (string) => {
  let letterObject = {};
  for (const i in string) {
    string[i] in letterObject
      ? (letterObject[string[i]] += 1)
      : (letterObject[string[i]] = 1);
  }
  return letterObject;
};

//optimal solution
function count(string) {
  var count = {};
  string.split('').forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}
