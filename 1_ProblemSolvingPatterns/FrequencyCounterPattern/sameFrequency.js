// Given two positive integers, find out if the
// numbers have the same frequency of digits

function sameFrequency(num1, num2) {
  num1 = num1.toString().split("");
  num2 = num2.toString().split("");

  if (num1.length !== num2.length) return false;

  let count = {};
  for (let val of num1) {
    count[val] ? count[val]++ : (count[val] = 1);
  }

  for (let i = 0; i < num2.length; i++) {
    if (!count[num2[i]]) return false;
    count[num2[i]]--;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
