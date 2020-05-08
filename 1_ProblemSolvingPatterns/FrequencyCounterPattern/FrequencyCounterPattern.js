// write function that accepts two arrays
// the function should return true if every value in the array
// has corresponding value squared in the second array.
// the frequency of value must be the same

FrequencyCounterPattern = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let count1 = {};
  for (let val of arr1) {
    count1[val] ? count1[val]++ : (count1[val] = 1);
  }

  let count2 = {};
  for (let val of arr2) {
    count2[val] ? count2[val]++ : (count2[val] = 1);
  }

  for (let key in count1) {
    if (!count2[key ** 2]) return false;
    if (count2[key ** 2] !== count1[key]) return false;
  }
  return true;
};
// Time Complexity - 0(n)

console.log(FrequencyCounterPattern([1, 2, 3], [4, 1, 9])); //true
console.log(FrequencyCounterPattern([1, 2, 3], [1, 9])); //false
console.log(FrequencyCounterPattern([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
