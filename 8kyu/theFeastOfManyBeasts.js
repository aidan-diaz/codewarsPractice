/* DESCRIPTION:
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. */

//My Solution

//target first and last index of string by using the charAt() method
//if the first and last index of string 1 are the same as the first and last index of string2, return true
//otherwise return false

const feast = (beast, dish) => beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length - 1) == dish.charAt(dish.length - 1)


//Parameters -> two string inputs, one for a beast name, and one for a dish name
/* Return -> true if the first and last char of beast name equal first and last char of dish name,
otherwise return false */
/* Examples:
-use the charAt method to compare string indecies and base return off of conditionals
-split into an array and compare first index and last index of each array to each other
*/

//TESTS
console.log(feast("great blue heron", "garlic naan")) /* return true */
console.log(feast("chickadee", "chocolate cake")) /* return true */
console.log(feast("brown bear", "bear claw")) /* return false */