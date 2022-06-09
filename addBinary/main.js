//PREP

//parameter = two integers, a and b

//return = a string representing a binary number of the sum of a and b

//examples

//addBinary(1,1) => '10'
//addBinary(5,9) =>  '1110'

//psuecode

// sum numbers set to variable - sum
// binaryArray = []

// while loop sum > 0
//    let checkDigit = 1
//    while (Math.pow(digit,2) < sum)
//       binaryArray.shift(0);
//       checkDigit++;
//    binaryArray[checkDigit-1] = 1
//    sum -= Math.pow(checkDigit-1)
//

// const addBinary = (a, b) => {
//   let sum = a + b;
//   let binaryArray = [];
//   let firstPass = true;

//   while (sum > 0) {
//     let checkDigit = 0;
//     while (Math.pow(2, checkDigit) <= sum) {
//       console.log(`Current search up to ${Math.pow(2, checkDigit)}`);
//       // first pass we will fill the binary with zeros
//       // every other pass will change 0's we made into 1s if needed
//       if (firstPass) binaryArray[checkDigit] = 0;

//       checkDigit++;
//     }
//     // set the biggest current sub-sum binary index to 1
//     binaryArray[checkDigit - 1] = 1;
//     console.log(`Binary Array is ${binaryArray}`);
//     sum -= Math.pow(checkDigit - 1, 2);
//     console.log(`Sum is ${sum}`);
//     firstPass = false;
//   }
//   return binaryArray.join('');
// };

//This was good as a mental challenge but the second solution was much more inuitive

const binaryFunc = (a, b) => {
  let sum = a + b;
  let binaryArray = [];

  while (sum > 0) {
    (sum / 2) % 1 === 0 ? binaryArray.unshift(0) : binaryArray.unshift(1);
    sum = Math.floor(sum / 2);
  }

  return binaryArray.join('');
};

const test = binaryFunc(5, 9);
console.log(test);

//Codewars optimal code

const addBinary = (a, b) => {
  return (a + b).toString(2);
};

// Number.toString() has a radix argument that will return binary(2), octal(8), and hexadecimal(16)
