/* DESCRIPTION:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

//My Solution

//use arr.reduce() to sum array
//return arr.reduce()

const sumMix = arr => arr.reduce((acc,sum) => +sum + acc, 0)


//Parameters -> one array of integers, mixed as strings and nums
//Return -> sum of all array values
/*Examples
-convert all array elements to numbers, use array.reduce to add values
*/

//TESTS
console.log(sumMix([9, 3, '7', '3'])) /* return 22 */
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) /* return 42 */
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])) /* return 41 */

//Solutions to Study

/* function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
} */

/* function sumMix(x){
  return eval( x.join("+") )
} */