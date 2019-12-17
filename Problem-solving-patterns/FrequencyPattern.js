same = () => {};

console.log([1, 2, 3], [4, 1, 9]); //true
console.log([1, 2, 3], [1, 9]); //false
console.log([1, 2, 1], [4, 4, 1]); // false (must be same frequency)
