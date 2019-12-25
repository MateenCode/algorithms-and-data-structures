// functions which accepts a variable numbers of arguemnts
// and checks wether are any duplicates among the arguments passed in.

function areThereDuplicates(...arr) {
  let start = 0;
  let next = 1;

  const sorted = arr.sort((a, b) => a > b);

  while (start < sorted.length) {
    if (sorted[start] !== sorted[next]) {
      start++;
      next++;
    } else return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
