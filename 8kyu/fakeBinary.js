/* DESCRIPTION:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

// My Solution

//split the string into an array, where each digit is it's own element
//use map to return 0 if an element < 5, and 1 if an element >= 5
//join the newly mapped elements back into a string
//return the newly made string

const fakeBin = x => x.split('').map(element => element < 5 ? 0 : 1).join('')

//Parameter is a string of digits
/* Return is a new string, 
where any of the original digits below 5 are replaced with 0, and any digits 5 and above are replaced with 1 */

//TESTS
console.log(fakeBin('45385593107843568')) /* '01011110001100111' */
console.log(fakeBin('509321967506747')) /* '101000111101101' */


// Solutions to Study