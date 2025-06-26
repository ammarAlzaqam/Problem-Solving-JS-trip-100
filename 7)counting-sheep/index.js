//TODO>> Consider an array/list of sheep where some sheep may be missing from their place. we need a function that counts the number of sheep present in the array (true means present).

function countSheep(arrayOfSheep) {
  let counter = 0; //! Initial value of zero
  arrayOfSheep.map((s) => {
    //! Loop through the array
    if (s) counter++; //! Check if the sheep === true, increase the Initial value + 1
  });
  return counter; //! return the number of existing sheep
}

console.log(countSheep([true, false, true, true, undefined, null, true])); //? output => 4
