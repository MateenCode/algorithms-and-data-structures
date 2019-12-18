// given two strings, write a function to determine if the second
// string is an anagram of the the first.

function validAnagram(first, second) {
  if (first.length !== second.length) return false;
  let lookup = {};
  for (let i = 0; i < first.length; i++) {
    // if letter exists, increment, otherwise set to 1
    lookup[first[i]] ? lookup[first[i]]++ : (lookup[first[i]] = 1);
  }
  // can't find letter or letter is zero then it's not an anagram
  for (let i = 0; i < second.length; i++) {
    if (!lookup[second[i]]) return false;
    lookup[second[i]] -= 1;
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
