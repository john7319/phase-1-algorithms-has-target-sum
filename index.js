function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const number = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === number) return true;
    }
  }
  return false;
}
hasTargetSum([3, 8, 12, 4, 11, 7, 10, 14], 10);
// returns true, since 3 and 7 add up to 10

hasTargetSum([22, 19, 4, 6, 30, 28, 13, 17], 25);
// returns true, since 19 and 6 add up to 25

hasTargetSum([1, 2, 5, 7, 10], 4);
// returns false, since no pair of numbers adds up to 4
/*
//Write the Big O time complexity of your function here
function hasTargetSum(array, target) {
  // 1 step
  const seenNumbers = {};
  for (const number of array) {
    // n steps
    const complement = target - number;
    // n steps
    if (seenNumbers[complement]) return true;
    // n steps
    seenNumbers[number] = true;
  }
  // 1 step
  return false;
}
  // Using the set function
function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

*/
/* 
  Add your pseudocode here
  loop through the array(for loop in use) 
  create a constant to store the value of our array minus the value in the current index 
  loop through the remaining part of the array (for loop in use)
  check if the value is equal to our number and return true if that is the care
  return false at the end of the array 

*/

/*
  Add written explanation of your solution here
  1. Because we are dealing with an array then we need to use loops to move through it
  2. loop through the array and using a for loop
  3. create a constant that stores the value of our number which is formed by subtracting the value of our current index to the value of the target
  4. loop through the remaining part if our array checking if the value is equal to target, it will return true
  5. when the array reachs the end it returns false.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
