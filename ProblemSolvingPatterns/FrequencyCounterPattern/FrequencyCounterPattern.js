// write function that accepts two arrays
// the function should return true if every value in the array
// has corresponding value squared in the second array.
// the frequency of value must be the same

same = (arr1, arr2) => {
  // check the length of arrays if there not equal then theres no reason to proceed this improves performance
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Create 2 empty objects where the count will be stored
  let count1 = {};
  let count2 = {};

  // loop through first array and get the count
  for (let val of arr1) {
    count1[val] = (count1[val] || 0) + 1;
  }
  // loop through second array and get the count
  for (let val of arr2) {
    count2[val] = (count2[val] || 0) + 1;
  }

  // loop through count1
  for (let key in count1) {
    //check if key** is in count2
    if (!(key ** 2 in count2)) return false;
    // check if the values correspond e.i if there are two 1s we have to check if there are two 4s
    if (count2[key ** 2] !== count1[key]) return false;
  }

  return true;
};
// Time Complexity - 0(n)

console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
