/* DESCRIPTION:
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */

// My Solution

//declare a new string to return that is equal to empty string
//create for loop where initialization is  let i = 1, condition is i <= num, incriment by 1
//concatenate i + ' sheep...' to the new string for each loop
//return the new string

const countSheep = num => {
    let murmurString = ''
    for(let i = 1; i <= num; i++) {
      murmurString += i + ' sheep...'
    }
    return murmurString
  }
  
  //Parameters --> one non-negative integer
  /* Return a string that repeats string '(num) sheep...', 
  accounting for each number from 1 to the inputted integer.
  If input is 0, return empty string */
  /* Examples
  -for loop that runs once for each number from 1 to the inputted number(inclusive), 
  concatenate each string of '(num) sheep...'
  */
  
  //TESTS
  console.log(countSheep(3)) /* return '1 sheep...2 sheep...3 sheep...' */
  console.log(countSheep(0)) /* return '' */
  console.log(countSheep(1)) /* return '1 sheep...' */

//Solutions to Study

/* countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join`` */