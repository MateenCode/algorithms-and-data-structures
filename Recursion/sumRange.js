function sumRange(num) {
  // this is the base case where function will end
  if (num === 1) return 1;
  //this is where different input is being sent back to the function
  return num + sumRange(num - 1);
}

console.log(sumRange(4));
