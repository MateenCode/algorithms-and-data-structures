// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique
// values in the array. there can be negative numbers in the
// array, but it will always be sorted

countUniqueValues = arr => {
  // check for empty array
  if (arr.length === 0) return 0;
  // set first pointer
  let i = 0;
  // loop that start at index of 1 loop through array length
  for (let j = 1; j < arr.length; j++) {
    //check if first pointer arr[i] is not equal too arr[j]
    if (arr[i] !== arr[j]) {
      // move up the first pointer
      i++;
      // set the first pointer to second pointers value
      arr[i] = arr[j];
    }
  }
  // return the first pointer plus 1 one to get the length
  return i + 1;
};

// 2 pointers moving sum directions that all that matters
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
