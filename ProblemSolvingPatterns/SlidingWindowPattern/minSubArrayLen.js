// function which accepts two parameters - an array of positive integers
// and a postive integer

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// if there isn't one, return 0 instead.

function maxSubarrayLen() {
  // add whatever parameters you deem necessary - good luck!
}

console.log(maxSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(maxSubarrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(maxSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is the greater than 52
console.log(maxSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(maxSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(maxSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(maxSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
