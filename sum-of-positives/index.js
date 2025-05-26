//TODO>> Sum Of Positives
// Write a function that returns the sum of all positive numbers in an array return 0 if no positive numbers in arr.

//! with simple loop
// initValue = 0
// Array Loop
// Check if teh number is positive or not
// Add teh number to teh initValue if Positive
function SumOfPositive(arr) {
  let initValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) initValue += arr[i];
  }
  return initValue;
}
console.log(SumOfPositive([10, 11, -50, 0]));

console.log("\n-----------------------------\n");

//! with reduce
function SumOfPositiveWithReduce(arr) {
  return arr.filter((n) => n > 0).reduce((acc, current) => acc + current, 0);
}
console.log(SumOfPositiveWithReduce([10, 11, -50, 0]));