// sorts the largest values "bubble" up to the top
function bubbleSort(arr) {
  // actually swaps the values
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
// Big O  O(n^2)
