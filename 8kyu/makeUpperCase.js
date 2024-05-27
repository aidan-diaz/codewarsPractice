/* DESCRIPTION:
Write a function which converts the input string to uppercase. */

// My Solution

//convert str to uppercase using the .toUpperCase() method
//return the uppercase string

const makeUpperCase = str => str.toUpperCase()

//Parameter accepts one input string
//Return the same string but uppercase
//Examples --> using the .toUpperCase() method

//TESTS
console.log(makeUpperCase('hello')) /* return 'HELLO' */
console.log(makeUpperCase('World')) /* return 'WORLD' */