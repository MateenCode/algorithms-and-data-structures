// write a function called maxSubarraySum which accepts
// an array of integers & a number called n. The functions
// should calculate the maximum sum of n consecutive
// elements in the array

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// Time Complexity - O(N)

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([], 4)); // null

// Sliding Window Pattern
// this pattern involves creating a window which can either be an array or
// number from one position to another
// Depending on a certiain condition, the window either increases or closes
// and a new window is created
// Very useful for keeping track of a subset of data in an array/string etc.
