/* DESCRIPTION:
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10] */

//My Solution

//declare a new empty array variable
//set up for loop, set i = 1, run while i <= n, incriment by 1
//push to new array -> x * i
//repeat for each incriment
//return new array

function countBy(x, n) {
    const newArr = []
    for(let i = 1; i <= n; i++) {
      newArr.push(x * i)
    }
    return newArr
  }
  
  /* Parameters -> two inputs, first input is a number (x), 
  second input is how many consecutive multiples of the first number should be returned (n) */
  //Return -> an array of the first (n) multiples of the provided number (x)
  /*Examples:
  -for loop, iterate once for each number from 1 to (n), push each result into array
  */
  
  //TESTS
  console.log(countBy(1,10)) /* return [1,2,3,4,5,6,7,8,9,10] */
  console.log(countBy(2,5)) /* return [2,4,6,8,10] */

  //Solutions to Study

  /* const countBy = (x, n) =>
  [...Array(n)].map((_, idx) => ++idx * x); */

  /* const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x) */