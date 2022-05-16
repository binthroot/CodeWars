//PREP
// evaluates a string and returns a boolean, true or false, based on the number
// of x's and o's being the same (true) or being different (false)

//parameter - a string that can contain any char

//returns - a boolean value, true or false

//examples
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//psuedocode
// function takes a string
//   create a Map object that will hold two properties, x and o
//   iterate through string
//     at each iteration check if it's an x or an o
//     if it's an x, increment x value in map
//     else if its an o, increment y value in map
//     all other values we won't return
//   return whether the map.x value is equal to the map.y value

const XO = (string) => {
  xoMap = new Map();
  xoMap.set("x", { val: 0 });
  xoMap.set("o", { val: 0 });
  Array.from(string).forEach((char) => {
    if (char.toLowerCase() === "x") {
      xoMap.get("x").val++;
    } else if (char.toLowerCase() === "o") {
      xoMap.get("o").val++;
    }
  });
  console.log(xoMap);
  return xoMap.get("x").val === xoMap.get("o").val;
};

console.log(XO("ooxx"));
