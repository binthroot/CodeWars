// Write a function that takes an integer as input, and returns the number of bits that are equal to
// one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const countBits = (num) => {
  return num
    .toString(2)
    .split("")
    .filter((element) => element == 1).length;
};

// Uses .toString(2) to convert to binary represenation of the number
// From there we split into an array and filter the array into just 1's, counting the length
