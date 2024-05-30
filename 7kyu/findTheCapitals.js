/* DESCRIPTION:
Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6] */

//My Solution

//declare an empty array variable
//create for loop and set i to 0, run loop while counter < word.length, incriment 1
//if word[i] == uppercase word i, add its index the array
//return the array

var capitals = function (word) {
    let capitalArr = []
    for(let i = 0; i < word.length; i++) {
      if(word[i] == word[i].toUpperCase()) {
        capitalArr.push(i)
      }
    }
      return capitalArr
  };
  
  //Parameter is one non-empty string
  //Return is an array of indicies of each capital letter in input string
  /*Examples:
  -for loop that runs once for each character in the string. If string index == string index uppercase, 
  push that character into an array
  -split string into an array, map new array with only capital letters, return array
  */
  
  //TESTS
  console.log(capitals('CodEWaRs')) /* return [0,3,4,6] */
  console.log(capitals('aPPLes')) /* return [1,2,3] */

  //Solutions to Study

  /* capitals=w=>[...w].map((c,i)=>c===c.toUpperCase()?i:-1).filter(v=>v>=0) */