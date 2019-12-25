// write a function called sumZero which accepts a sorted array
// of integers. The function should find the first pair where the
// the sum is 0. Return an array that includes both values that sum to
// zero or undefined if a pair does not exist

sumZero = arr => {
  // start left of array & right of array
  let left = arr[0];
  let right = arr.length - 1; // return 7

  console.log(left, right);

  while (left < right) {
    // check sum of left and right
    let sum = arr[left] + arr[right];
    // check sum of left and right
    if (sum === 0) {
      // check if sum is zero if so return the pair
      return [arr[left], arr[right]];
      // if sum is greater then zero
    } else if (sum > 0) {
      // substract 1 from the right
      right--;
    } else {
      // if sum is not greater then 0 and also not equal 0 then left++
      left++;
    }
  }
};
// Time Complexity - O(N)
// Space Complexity - O(1)
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 10])); //[-3, 3]
// console.log(sumZero([-2, 0, 1, 3])); // undefined
// console.log(sumZero([1, 2, 3])); // undefined

// Mulitple Pointers
// Creating pointers or values that correspond to an index or
// position and move towards the beginningm end or middle based on
// a certain condition, very efficient for solving problems with
// minimal space complexity as well
