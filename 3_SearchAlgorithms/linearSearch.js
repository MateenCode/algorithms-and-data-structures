// find the index of the value
// Loop through array and check if the current array element
// is equal to the value of it is, return the index at which the
// the elemnt is found

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

console.log(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100));
console.log(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 56));
