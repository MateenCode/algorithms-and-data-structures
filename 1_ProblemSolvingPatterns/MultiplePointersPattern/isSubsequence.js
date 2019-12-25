// function which takes in two strings and checks whether the characters in
// the first string form a subsequence of the characters in the second string.
// in other words, the function should check whether the characters in the first
// string appear somewhere in the second string, without their order changing

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  // while j is less then str2s length
  while (j < str2.length) {
    // if str2[j] is equal to str1[i] then increment i
    if (str2[j] === str1[i]) i++;
    // if i is equal to str1 length then return true
    if (i === str1.length) return true;
    // everything else j++
    j++;
  }
  // if anything else return false
  return false;
}
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)