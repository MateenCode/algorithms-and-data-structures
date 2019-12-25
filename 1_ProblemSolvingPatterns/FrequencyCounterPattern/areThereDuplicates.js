// functions which accepts a variable numbers of arguments
// and checks whether there are any duplicates among the arguments passed in.

function areThereDuplicates(...arr) {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] ? count[arr[i]]++ : (count[arr[i]] = 1);
  }

  for (let val in count) {
    if (count[val] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
