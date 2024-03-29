//psuedo
// Start - (array1, array2)
//   Set a var SMUSH that is the array2 joined into one big string
//   Set a var NEWARRAY that is an empty array
//   Loop over array1
//     For each element of array1, check if element is in SMUSH string
//       If it is, push it to the NEWARRAY
//   Sort the NEWARRAY
//   Return the NEWARRAY

const inArray = (array1, array2) => {
  let smushArray = array2.join(' ');
  console.log(smushArray);
  let newArray = [];
  for (let el of array1) {
    if (smushArray.indexOf(el) >= 0) {
      newArray.push(el);
    }
  }
  newArray.sort();
  return newArray;
};

// CodeWars top

function inArray(array1, array2) {
  return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
}

// this filter array1
// the callback uses another function find
//  the find callback returns the element in array2
