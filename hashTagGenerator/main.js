function generateHashtag(str) {
  // map the string to uppercase first letter and trim whitespace
  let testString = str.replace(/\s/g, '');
  if (testString.length < 1 || testString.length >= 140) {
    return false;
  }
  let newString = str
    .split(' ')
    .map((el) => {
      return el.slice(0, 1).toUpperCase() + el.slice(1);
    })
    .join('')
    .replace(/\s/g, '');

  return '#' + newString;
}

//Codewars 5kyu generate hash tags
