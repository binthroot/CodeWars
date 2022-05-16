// given your points and an array of class mates points, function should return a boolean
// true if you did better than the avg or false if you did not do better than the average or were equal
// to the average

function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((acc, element) => (acc += element), 0) /
      classPoints.length
  );
}
