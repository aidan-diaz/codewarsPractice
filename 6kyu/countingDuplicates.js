/* DESCRIPTION:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

//My Solution

//declare an empty duplicateAmount variable
//convert text to lowercase
//split the text into an array and sort the elements
//run a for loop, set i to 0, run while i < text.length, incriment by 1
/* if first index of i does not equal last index of i, 
and the next element does not equal the current element add 1 to duplicateAmount */
//return duplicateAmount
function duplicateCount(text){
    let duplicateAmount = 0
    text = text.toLowerCase().split('').sort()
    for(let i = 0; i < text.length; i++) {
      if(text.indexOf(text[i]) != text.lastIndexOf(text[i]) && text[i] != text[i + 1]) {
        duplicateAmount += 1
      }
    }
    return duplicateAmount
  }
  
  //Parameters --> one input string of case insensitive alphabetic characters and integers
  //Return --> the amount of characters & digits that occur more than once
  /* Examples:
  -nested for loop to compare indecies to each other
  -compare first index of character to last index of same character, 
  if not equal, add one to duplicate counter
  */
  
  //TESTS
  console.log(duplicateCount("")) /* returns 0 */
  console.log(duplicateCount("aabbcde")) /* returns 2 */
  console.log(duplicateCount("aabBcde")) /* returns 2 */

//Solutions to Study

/* function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
} */