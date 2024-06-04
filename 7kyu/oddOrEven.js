/* DESCRIPTION:
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun! */

//My Solution

//append the reduce method to the input array
//use the method to add each element in the array together
//return 'even' if sum is even
//return 'odd' if sum is odd

const oddOrEven = arr => arr.reduce((acc, current) => acc + current, 0) % 2 == 0 ? 'even' : 'odd'


//Parameters -> one input array of integers
//Return -> odd if sum of array elements is odd, or even if sum of array elements is even
/* Examples:
- use reduce method to add all elements in array
- use a for loop to add each element to a sum variable (intitially set to 0)
*/

//TESTS
console.log(oddOrEven([0, 1, 5])) /* return 'even' */
console.log(oddOrEven([0, 1, 3])) /* return 'even' */
console.log(oddOrEven([-1023, 1, -2])) /* return 'even' */
console.log(oddOrEven([0, 1, 2])) /* return 'odd' */
console.log(oddOrEven([0, 1, -4])) /* return 'odd' */