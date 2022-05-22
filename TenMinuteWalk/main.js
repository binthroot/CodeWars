// PREP
// ten minute walk, each letter represents a direction to walk one block, each
// block takes one minute to walk. The walk should end up where it left off.
// This should mean that the array should have a matching number of 'n' == 's'
// as well as 'w' == 'e'

// paramater - an array that is a series of the letters 'n','s','w' and 'e'

// example

//psuedocode

// check that the array is less than 10 or greater than/equal to 2 (n s - e w)
// create a map object with each letter having a value of 0
// iterate through the parameter array
//   for each letter, update the map count of that letter
// check if the number of 'n' and 's' are equal  && if the number of 'w' and 'e' are equal
//    return true if so - return false if not

const isValidWalk = (walk) => {
  if (!walk.length === 10) return false;

  let walkMap = new Map([
    ["n", { val: 0 }],
    ["s", { val: 0 }],
    ["e", { val: 0 }],
    ["w", { val: 0 }],
  ]);
  console.log(walkMap.get("n").val);
  for (const letter of walk) {
    walkMap.get(letter).val++;
  }
  if (
    walkMap.get("n").val === walkMap.get("s").val &&
    walkMap.get("e").val === walkMap.get("w").val
  ) {
    return true;
  } else {
    return false;
  }
};

let walkTest = "nsnsnsnsns".split("");
isValidWalk(walkTest);
console.log(isValidWalk(walkTest));
