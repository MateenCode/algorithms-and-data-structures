// sorts the largest values "bubble" up to the top

function bubbleSort(arr) {
  // actually swaps the values
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // loop that starts from end to start of array length
  for (let i = arr.length; i > 0; i--) {
    // inner loop that called j from the beginning until i-1
    for (let j = 0; j < i - 1; j++) {
      // check if current value is greater then next value
      if (arr[j] > arr[j + 1]) {
        // send arr, j and next j value to swap
        swap(arr, j, j + 1);
      }
    }
  }
  // return arr
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
// Big O  O(n^2)
