// Builds up the sort by gradually creating a
// larger left half which is always sorted

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < currentVal) {
      }
    }
  }
};

console.log(insertionSort([2, 1, 9, 76, 4]));
// Big O  O(n^2)
