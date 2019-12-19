// function which accpets an array and a callback. The function returns true if
// a single valye in the array returns when passed to the callback otherwise returns false

function someRecursive() {
  // add whatever parameters you deem necessary - good luck!
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false
