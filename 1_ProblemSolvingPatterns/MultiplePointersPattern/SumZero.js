// write a function called sumZero which accepts a sorted array
// of integers. The function should find the first pair where the
// the sum is 0. Return an array that includes both values that sum to
// zero or undefined if a pair does not exist

sumZero = arr => {
  let left = arr[0];
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
  return undefined;
};
// Time Complexity - O(N)
// Space Complexity - O(1)
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 10])); //[-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined

// Mulitple Pointers
// Creating pointers or values that correspond to an index or
// position and move towards the beginningm end or middle based on
// a certain condition, very efficient for solving problems with
// minimal space complexity as well
