function factorial(num) {
  // this is the base
  if (num === 1) return 1;
  // this is the different inputs
  return num * factorial(num - 1);
}

console.log(factorial(5));
// 5 factorial 5!  = 5 * 4 * 3 * 2 * 1
