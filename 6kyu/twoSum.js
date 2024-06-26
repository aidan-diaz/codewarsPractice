/* DESCRIPTION:
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1] */

//My Solution

/* start a for loop, set counter to 0 (start at index 0), run while counter is
less than input array length
*/
/* nest a for loop in the first loop, set counter to 1 (start at index 1),
run while counter is less than input array length
*/
/* if array element of first loop + array element of second loop equals target 
sum input, return index of both elements */
//otherwise continue loop until two element that equal target are found

function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
      for(let j = 1; j < numbers.length; j++) {
        if(numbers[i] + numbers[j] == target && i != j) {
          return [i, j]
        }
      }
    }
  
  }
  
  /* Parameters --> one input array of integers, 
  and one input integer that is the target sum of two of the input array elements */
  /* Return --> an array of the input array indecies of the elements 
  that can be added together to equal the target sum input */
  /* Examples:
  -two for loops, one that checks the first array index to the other indecies.
  if the first indexed element plus another indexed element equals the target,
  return the indecies of the added elements in the form of an array
  */
  
  //TESTS
  console.log(twoSum([1, 2, 3], 4)) /* returns [0, 2] or [2, 0] */
  console.log(twoSum([3, 2, 4], 6)) /* returns [1, 2] or [2, 1] */

