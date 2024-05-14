/* DESCRIPTION:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters. */

// My Solution
function removeChar(str){
    let newStr = str.substring(1, str.length - 1)
    return newStr
  };

// Solutions to Study

/* const removeChar = str => str.slice(1,-1) */