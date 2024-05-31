/* DESCRIPTION:
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

//My Solution

//split the string by spaces, into an array of elements
//map each element to return the same element, but split, reversed, and joined
//join all of the newly reversed array elements back into a string, by the spaces that they were originally split by
//return the updated string

const reverseWords = str => str.split(' ').map(element => element.split('').reverse().join('')).join(' ')

//Parameters -> one string input
/* Return -> the same string with each individual word in the string 
reversed (spelled backwards), while keeping all spaces */
/* Examples:
- split string into array, reverse each element in array, and rejoin into string
*/

//TESTS
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
//return 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple'))
//return 'elppa'
console.log(reverseWords('double  spaced  words'))
//return 'elbuod  decaps  sdrow'

//Solutions to Study

/* function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
} */
