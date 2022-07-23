const deleteNth = (arr, n) => {
  mapObject = {};
  copyArray = [...arr];
  const result = copyArray.filter((number) => {
    if (mapObject.hasOwnProperty(number)) {
      if (mapObject[number] > n) {
        return false;
      }
      mapObject[number] += 1;
      return true;
    }
    mapObject[number] = 1;
    return true;
  });
  console.log(mapObject);
  return result;
};

let testData = deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);

console.log(testData);
