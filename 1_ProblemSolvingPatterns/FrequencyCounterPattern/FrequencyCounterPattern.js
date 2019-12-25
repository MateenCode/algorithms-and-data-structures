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
    // if value doesnt exist set 0 then add 1 to the 0
    count1[val] = (count1[val] || 0) + 1;
  }
  // loop through second array and get the count
  for (let val of arr2) {
    // if value doesnt exist set 0 then add 1 to the 0
    count2[val] = (count2[val] || 0) + 1;
  }

  // loop through count1
  for (let keys in count1) {
    //check if key** is in count2
    if (!count2[keys ** 2]) return false;
    // check to see frequency of count1 matches frequency of count2 squares
    if (count2[keys ** 2] !== count1[keys]) return false;
  }

  return true;
};
// Time Complexity - 0(n)

console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
