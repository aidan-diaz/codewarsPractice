/* DESCRIPTION:
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar. */

// My Solution
function isPalindrome(x) {
    let strRev = ""; 
    for(let i = x.length - 1; i >= 0; i--) {
      x = x.toLowerCase()
      strRev += x[i];
    } if(x === strRev) {
      return true
    } else {
      return false
    }
  }

// Solutions to Study

/* const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase(); */