const maxSubarray = (array) => {
  maxSub = array[0];
  currSum = 0;

  for (let i = 0; i < array.length; i++) {
    // this if statement will discard any negative sub segments
    if (currSum < 0) currSum = 0;

    // adds the current number, which if currSum is 0 restarts the segment
    currSum += array[i];

    //takes the maximum between what is currently the max and the current computed sum
    maxSub = Math.max(currSum, maxSub);
  }

  return maxSub;
};

//Leetcode 53 - maximum Subarray
// Takes an array of numbers, both positive and negative
// Returns the maximum sum of any contiguous subarray in the array
