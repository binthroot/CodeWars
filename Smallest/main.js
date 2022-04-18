// You have a positive number n consisting of digits.

// You can do at most one operation: Choosing the index of a
// digit in the number, remove this digit at that index and
// insert it back to another or at the same place in the number
// in order to find the smallest number you can get.

// Task:
// Return an array or a tuple or a string depending on the language
// (see "Sample Tests") with

// the smallest number you got
// the index i of the digit d you took, i as small as possible
// the index j (as small as possible) where you insert this digit
//  d to have the smallest number.

// function smallest(n) {
//   //split n into a string
//   let array = String.n.split("");
//   const objectOfArrays = {};
//   let smallest;

//   array.forEach((value, index) => {});
// }

const smallest = (n) => {
  let array = String(n).split("");
  const object = {};
  let smallest = n;
  object[smallest] = [n, 0, 0];

  array.forEach((value, index) => {
    //console.log(`${value} ${index}`);
    array.slice(index + 1).forEach((nextValue, secondIndex) => {
      let arrayCopy = [...array];

      let b = arrayCopy[index];
      arrayCopy[index] = arrayCopy[secondIndex];
      arrayCopy[secondIndex] = b;

      object[Number(arrayCopy.join(""))] = [
        Number(arrayCopy.join("")),
        index,
        secondIndex,
      ];
    });
  });
  return object;
};

console.log(smallest(261235));
