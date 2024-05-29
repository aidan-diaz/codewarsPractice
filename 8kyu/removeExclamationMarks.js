/* DESCRIPTION:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

//My Solution

//set a variable to a new empty string
//set up a for loop to iterate once for each character of a string
//if the string character is not an !, concatenate it to the new string variable
//if the character is an !, do nothing
//return the new string

function removeExclamationMarks(s) {
    let newStr = ''
    for(let i = 0; i < s.length; i++) {
      s[i] != '!' ? newStr += s[i] : newStr += ''  
    }
    return newStr
  }
  
  //Parameter is a string
  //Return the input string without exclamation marks
  /* Examples
  - use a for loop and conditional to check the index of each character, 
  and do not return all characters but ! in a new string
  - convert string to array, array.map, only return elements that != '!', convert back to string
  */
  
//TESTS
  console.log(removeExclamationMarks("Hello World!")) /* return 'Hello World' */
  console.log(removeExclamationMarks('!')) /* return  */

//Solutions to Study

/* function removeExclamationMarks(s) {
  return s.split('!').join('');
} */

/* function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
} */