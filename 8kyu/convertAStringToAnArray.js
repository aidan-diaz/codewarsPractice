/* DESCRIPTION:
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"] */

//My Solution

//return split method appended to input string using dot notation
//split at spaces so every word becomes its own element

const stringToArray = string => string.split(' ')

//Parameters --> one string input
//Return --> input string converted into an array of words
/* Examples
- split method to make each string word an element in an array
*/

//TESTS
console.log(stringToArray("I love arrays they are my favorite"))
/* returns ["I", "love", "arrays", "they", "are", "my", "favorite"] */
console.log(stringToArray("Robin Singh"))
/* returns ["Robin", "Singh"] */