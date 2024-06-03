/* DESCRIPTION:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

//My Solution

//use reduce method, set parameters of reduce to acc and current, and a function
//set function multiply current by acc
//return the reduced array

const grow = x => x.reduce((acc, current) => current * acc)

//Parameter -> one non-empty input array of integers
//Return -> the product of all array elements multiplied together
/* Examples:
- use reduce method to multiply all nums together
- use a for loop to multiply current num by next num
*/

//TESTS
console.log(grow([1, 2, 3])) /* return 6 */
console.log(grow([4, 1, 1, 1, 4])) /* return 16 */
console.log(grow([2, 2, 2, 2, 2, 2])) /* return 64 */