function twoSum(numbers, target) {
  // ...
  let mapObj = {};

  for (let i = 0; i < numbers.length; i++) {
    // determines if the current number minus the target has already
    // come up before by using our hasMap
    let addend = target - numbers[i];
    //this checks our hashMap for that number
    if (mapObj.hasOwnProperty(addend)) {
      return [i, mapObj[addend]];
    } else {
      // adds the current number as a property of the hashmap
      // the value of this hashMap is the current index
      mapObj[numbers[i]] = i;
    }
  }
  return -1;
}
