/* DESCRIPTION:
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array. */

//My Solution

//use sort method to sort the inputted array
//target the first element of the sorted array
//split each character of the first element into its own element in an array
//join all the characters back into a string, with *** between each character
//return the 0th index of the original array
function twoSort(s) {
    s.sort()
    return s[0].split('').join('***')
  }
  
  //Parameters --> one input array, containing a list of strings
  //Return --> the first element of the sorted array, with *** between each letter
  /* Examples:
  - sort array, split array[0], rejoin with ***
  */