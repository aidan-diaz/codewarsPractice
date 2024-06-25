/* DESCRIPTION:
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] */

//My Solution

//append map iterator method to inputted array
/* for each element, prepend appropriate element number followed by colon 
and space to the element */
//return the updated array

const number = array => array.map((x,i) => `${i + 1}: ${x}`)

//Parameters --> one input array of strings
/* Return --> each string element prepended by the appropriate element number.
If input array is empty, return empty array */
/* Examples:
- for loop starting at one - for each iteration, 
concatenate the counter with a colon and a space to the element, 
push all to a new array
-map iterator method, 
concatenate appropriate element number and a colon to the element
*/

//TESTS
console.log(number([])) /* returns [] */
console.log(number(["a", "b", "c"])) /* returns ["1: a", "2: b", "3: c"] */