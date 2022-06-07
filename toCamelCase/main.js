const toCamelCase = (str) => {
  return str
    .replace(/-|_/g, ' ')
    .split('')
    .map((char, index, array) => {
      if (array[index - 1] === ' ') return char.toUpperCase();
      return char;
    })
    .join('');
};

test = 'the-one-you';
testTwo = 'the_one_you';

console.log(toCamelCase(test));
console.log(toCamelCase(testTwo));
console.log('');
