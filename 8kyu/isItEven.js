/* DESCRIPTION:
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata. */

//My Solution

//number is even if number % 2 is 0
//if number % 2 is 0, return true
//otherwise return false

const testEven = n => n % 2 == 0 ? true : false

//Parameter is a one number (n)
//Return true if the input number is even, return false if odd
/*Examples:
- conditional/ternary to determine if number is even
*/

//Tests
console.log(testEven(0)) /* return true */
console.log(testEven(1)) /* return false */
console.log(testEven(2.75)) /* return false */

//Solutions to Study

//const testEven = n => n % 2 === 0;