// given two strings, write a function to determine if the second
// string is an anagram of the the first.

function validAnagram(first, second) {
  if (first.length !== second.length) return false;
  let lookup = {};
  for (let i = 0; i < first.length; i++) {
    lookup[first[i]] ? lookup[first[i]]++ : (lookup[first[i]] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    if (!lookup[second[i]]) return false;
    lookup[second[i]]--;
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
