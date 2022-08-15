function findFirstDuplicate(arr) {
  const set = new Set();

  for (const int of arr) {
    if (set.has(int)) {
      return int;
    }

    set.add(int);
  }

  return -1;
}

/*
PROBLEM: Find the first duplicate in an array. If none, return -1.

APPROACH: No UI. Input is an array of integers. Output is an integer.

For each letter, check with .filter and .length to see if it matches any other in the array
  if yes, return that number
  if no, move to next letter
   
*/

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

