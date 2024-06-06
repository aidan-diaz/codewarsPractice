/* DESCRIPTION:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

//My Solution

//use the filter iterator method
//filter out/remove all odd indecies
//return the filtered array

const removeEveryOther = arr => arr.filter((element, index) => index % 2 == 0)

//Parameters -> one non-empty input array
//Return -> the same array but without odd indecies
/* Examples:
-for loop to run once for each index, remove even ones
-filter iterator method, filter out all odd indecies
*/

//TESTS
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])) /* return ['Hello', 'Hello Again'] */
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) /* return [1, 3, 5, 7, 9] */
console.log(removeEveryOther([[1, 2]])) /* return [[1, 2]] */
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}])) /* return ['Goodbye'] */