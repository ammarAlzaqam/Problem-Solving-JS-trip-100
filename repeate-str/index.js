// TODO >> Create a function that repeats a given string `s`, `n` number of times and returns the final result.
function repeatString(s, n) {
  //! with loop
  //* let repeatedStr = "";
  //* for (let i = 0; i < n; i++) {
  //*   repeatedStr += s;
  //* }
  //* return repeatedStr;

  //! using build in function
  return s.repeat(n);
}

console.log(repeatString("ammar ", 3)); // ➜ "ammar ammar ammar"
