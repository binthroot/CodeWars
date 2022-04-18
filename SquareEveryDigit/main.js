// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

const squareDigits = (num) => {
  return Number(
    String(num)
      .split("")
      .map((digit) => Math.pow(Number(digit), 2))
      .join("")
  );
};

console.log(squareDigits(9119));
