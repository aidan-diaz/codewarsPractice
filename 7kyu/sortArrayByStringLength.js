/* DESCRIPTION:
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length. */

//My Solution

//append sort iterator method to input array
/* check to see if the length of the current string element is less than the
length of the next string element */
//return the sorted array

const sortByLength = array => array.sort((a,b) => a.length - b.length)

//Parameters --> one input array of strings
//Return --> the same array, with the strings sorted from shortest length to longest
/* Examples:
- use sort iterator method to sort array strings by length
*/