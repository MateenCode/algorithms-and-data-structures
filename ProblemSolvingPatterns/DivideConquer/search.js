// Given a sorted array of integers, write a function called
// search, that accepts a value and returns the index
// where the values passed to the functions is located.
// if the value is not found, return -1

// Naive Solution
// search = (arr, val) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// };
// Time Complexity 0(N)

search = (array, val) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
// Time Complexity - Log(N) - Binary Search!

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

// Divide & Conquer
// this pattern involves dividing a data set into smaller chunks & then
// repeating a process with a subset of data
// this pattern can tremendously decrease time complexity
