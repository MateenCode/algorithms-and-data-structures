function countDown(num) {
  // is number less than or equal to 0
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  // print the current num
  console.log(num);
  // subtract that number
  num--;
  // start the function from the top
  countDown(num);
}
countDown(5);

// How Recursive functions work
// invoke the same function with a different input until you
// reach your base case
// base case, where the recursion stops.

// two essential parts of a recursive function are
// Base Case & different input
