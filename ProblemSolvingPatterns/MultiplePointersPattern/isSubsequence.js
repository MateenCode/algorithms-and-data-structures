// function which takes in two strings and checks whether the characters in
// the first string form a subsequence of the characters in the second string.
// in other words, the function should check whether the characters in the first
// string appear somewhere in the second string, without their order changing

function isSubsequence() {
  // good luck. Add any arguments you deem necessary.
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
