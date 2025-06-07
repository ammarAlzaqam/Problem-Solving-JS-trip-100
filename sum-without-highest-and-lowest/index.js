// Check if Empty Value return 0
// Find the Highest Number
// Find the Lowest Number
// Filter the array
// Sum all numbers in the array

function sumWithoutHighestAndLowest(array) {
  if (!array) return 0;
  let maxValue = Math.max(...array);
  let minValue = Math.min(...array);
  let filteredArray = array.filter((n) => n !== maxValue && n !== minValue);
  let totalNumber = filteredArray.reduce((acc, curr) => acc + curr, 0);
  console.log(totalNumber);
}
sumWithoutHighestAndLowest([1,5,45,6])
