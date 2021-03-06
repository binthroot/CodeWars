const toCamelCase = (str) => {
  return (
    str
      .replace(/-|_/g, ' ')
      .split(' ')
      // .map((char, index, array) => {
      //   if (array[index - 1] === ' ') return char.toUpperCase();
      //   return char;
      // })
      .map((word, index) => {
        if (index !== 0) return word[0].toUpperCase() + word.slice(1);
        return word;
      })
      .join('')
      .replace(' ', '')
  );
};

test = 'the-one-you';
testTwo = 'the_one_you';

console.log(toCamelCase(test));
console.log(toCamelCase(testTwo));
