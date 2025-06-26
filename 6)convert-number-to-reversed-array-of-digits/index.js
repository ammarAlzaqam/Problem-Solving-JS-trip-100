//TODO>> Given a random non-negative number, you have to return the digits of this number within an Array in reverse order.

//* Change the number to string
//* Split the string to an Array
//* Change the strings in an Array to numbers
//* Reverse the Array

function digitize(n) {
  return n
    .toString() //! Change the number to string
    .split("") //! Split the string to an Array
    .map((num) => Number(num)) //! Change the strings in an Array to numbers
    .reverse(); //! Reverse the Array
}

console.log(digitize(12094)); //? output => [4, 9, 0, 21]
