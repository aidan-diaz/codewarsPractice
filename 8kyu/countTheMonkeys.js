/* DESCRIPTION:
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1] */

 //My Solution

 //declare a new empty array variable
//create a for loop, set counter to 1, loop while counter is <= n(num of monkeys), incriment by 1
//for each number, push the number into the new array
//return new array

function monkeyCount(n) {
    const newArr = []
    for(let i = 1; i <= n; i++) {
      newArr.push(i)
    }
    return newArr
  }
  
  //Parameters -> one input number (n) amount of monkeys
  //Return -> an array, where each element is a number from 1 to n in order (both 1 and n are inclusive)
  /* Examples:
  -for loop, iterate once for each number from 1 to n, add each number to array
  */
  
  //TESTS
  console.log(monkeyCount(5)) /* return [1, 2, 3, 4, 5] */
  console.log(monkeyCount(3)) /* return [1, 2, 3] */
  console.log(monkeyCount(9)) /* return [1, 2, 3, 4, 5, 6, 7, 8, 9] */ 

//Solutions to Study

  /* function monkeyCount(n) {
  return Array.from({length:n}, (_,i)=>i+1)
} */

/* function monkeyCount(n) {
return [...Array(n).keys()].map(a => a+1)
} */