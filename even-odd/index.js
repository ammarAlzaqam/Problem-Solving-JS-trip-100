//TODO>> even odd numbers

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOdd(value) {
  if (value % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");
console.log(evenOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd 