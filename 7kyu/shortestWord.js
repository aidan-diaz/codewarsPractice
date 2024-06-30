/* DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

//My Solution

//split the string into an array by spaces, so that each individual word is its own element
//sort the array by word length (shortest word first, longest word last)
//return the length of the first word (shortest word)
function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length)[0].length
  }
  
  //Parameters --> one input string of multiple words
  //Return --> the length of the shortest word in the string
  /* Examples:
  - split the string into an array where each element is a word from the string - if word is smaller than other words, return it
  - split into array, sort by length, return first element
  */
  
  //TESTS
  console.log(findShort("bitcoin take over the world maybe who knows perhaps")) /* returns 3 */
  console.log(findShort("turns out random test cases are easier than writing out basic ones")) /* returns 3 */
  console.log(findShort("Let's travel abroad shall we")) /* returns 2 */

//Solutions to Study

/* function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
} */