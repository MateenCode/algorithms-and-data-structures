function factorial(num) {
  // this is the base
  if (num === 1) return 1;
  // this is the different inputs
  return num * factorial(num - 1);
}

console.log(factorial(5));
