//PREP

//parameter - string

//result - string without spaces

//example
// removeString("This is fun") => "Thisisfun"

//psuedocode
// ---------
// split string by spaces then rejoin without spaces

const noSpace = (string) => {
  return string.split(" ").join("");
};

console.log(noSpace("This is fun"));
