var capitals = function (word) {
  // Write your code here
  return word
    .split('')
    .map((e, index) => {
      if (e.charCodeAt(0) >= 65 && e.charCodeAt(0) <= 94) {
        return index;
      } else {
        return null;
      }
    })
    .filter((e) => e !== null);
};

// 7kyu code wars
