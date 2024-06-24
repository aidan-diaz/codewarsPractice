/* DESCRIPTION:
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6. */

//My Solution

//create empty array variable
//create for loop, set counter to 1
/* run loop while counter is less than or equal 
to the limit parameter divided by integer parameter */
//multiply the counter by the integer parameter for each loop increment
//push the product for each loop to the empty array
//return the new array

function findMultiples(integer, limit) {
    const multiples = []
    for(let i = 1; i <= Math.floor(limit / integer); i++) {
      multiples.push(i * integer)
    }
    return multiples  
  }
  
  /* Parameters --> two input numbers - a starting integer value, 
  and an ending integer value */
  /* Return --> a list of multiples in array form, 
  from the starting integer value to the ending integer value (both inclusive) */
  /* Examples:
  - for loop that adds each multiple to an array
  */
  
  //TESTS
  console.log(findMultiples(5, 25)) /* return [5, 10, 15, 20, 25] */
  console.log(findMultiples(4, 27)) /* return [4, 8, 12, 16, 20, 24] */

  //Solutions to Study

  /* function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
} */

  /* function findMultiples(int,limit){
  return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
} */