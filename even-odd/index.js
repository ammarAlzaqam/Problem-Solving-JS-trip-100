//TODO>> even odd numbers
function evenOdd(value) {
  if (value % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");
console.log(evenOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd 