function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let array = [0, 0];
  for (let element of input) {
    if (element > 0) {
      array[0]++;
    } else if (element < 0) {
      array[1] += element;
    }
  }
  return array;
}
