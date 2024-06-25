/* DESCRIPTION:
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */

//My Solution

//append .every() iterator method to input array
//check to see if all array elements are less than or equal to the input integer
//return the result

const smallEnough = (a, limit) => a.every(x => x <= limit)

//Parameters --> one input array and one integer value
/* Return --> true if all array values are less than or equal to the integer value,
false otherwise */
/* Examples:
-use .every() iterator method 
to see if all elements are less than or equal to the integer
-use for loop, if elements are less than or equal to integer, proceed with loop.
If not, return false. If exit loop, return true.
*/

//TESTS
console.log(smallEnough([66, 101], 200)) /* returns true */
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) /* returns false */
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)) /* returns true */
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)) /* returns true */