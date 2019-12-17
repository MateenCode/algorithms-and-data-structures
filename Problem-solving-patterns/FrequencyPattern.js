same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let count1 = {};
  let count2 = {};

  for (let val of arr1) {
    count1[val] = (count1[val] || 0) + 1;
  }
  for (let val of arr2) {
    count2[val] = (count2[val] || 0) + 1;
  }

  for (let key in count1) {
    if (!(key ** 2 in count2)) return false;
    if (count2[key ** 2] !== count1[key]) return false;
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
