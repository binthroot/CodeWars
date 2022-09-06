const validAnagram = (str1, str2) => {
  // if they aren't the same length, they ain't anagrams
  if (str1.length !== str2.length) return false;

  // we're using a hashmap
  let map = {};

  // iterate through stringOne, incrementing a hash map with each letter as a property, we are counting all the letters in this object
  for (const letter of str1) {
    if (!map[letter]) map[letter] = 0;
    map[letter]++;
  }

  // our next for loop subtracts if the letter is in the hashmap, if it isn't it's automatically not an anagram
  for (const letter of str2) {
    if (!map[letter]) return false;
    map[letter]--;
  }
  return true;
  // this is an O(n) solution because we only have to travel n elements of each string once
};

console.log(validAnagram('maven', 'venma'));
console.log(validAnagram('maven', 'venmx'));
console.log(validAnagram('maven', 'vnmae'));
console.log(validAnagram('maven', 'enmav'));
