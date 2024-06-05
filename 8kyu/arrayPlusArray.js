/* DESCRIPTION:
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

//My Solution

//concatenate the two input arrays
//use the reduce method to add each array element to a sum
//return the sum

const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((acc, current) => acc + current)

//Parameters -> two input array of numbers
//Return the sum of all of the elements in both arrays
/* Examples:
-set a sum variable, run a for loop for each array and add each element to sum
-combine the arrays and use the reduce method
*/

//TESTS
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) /* return 21 */
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])) /* return -21 */
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])) /* return 15 */
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])) /* return 2100 */

//Solutions to Study

/* function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
} */