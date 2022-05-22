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

//best practice solution codewars

function isValidWalkBestPractice(walk) {
  let dx = 0;
  let dy = 0;
  let dt = walk.length;
  // dx and dy represent how far we go on the x and y coordinate plain
  // 'n' will add 1 to dx, 's' will subtract 1 from dx
  // 'e' will add 1 to dy, 'w' will subtract 1 from dy

  for (const direction of walk) {
    switch (direction) {
      case "n":
        dy--;
        break;
      case "s":
        dy++;
        break;
      case "w":
        dx--;
        break;
      case "e":
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}
