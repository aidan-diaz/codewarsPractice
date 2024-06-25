/* DESCRIPTION:
Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar. */

//My Solution

//create a new empty array variable
//use Math.min to find minimum number of input array
//push minimun to new array
//use Math.max to find maximum number of input array
//push maximum to new array
//return new array

function minMax(arr){
    const minAndMaxNums = []
    minAndMaxNums.push(Math.min(...arr))
    minAndMaxNums.push(Math.max(...arr))
    return minAndMaxNums
  }
  
  //Parameters --> one input array of numbers
  //Return --> the minimum and maximum numbers of the original array in a new array
  /* Examples:
  -sort the array, put the lowest and highest numbers in a new array
  -Math.min and Math.max, push both numbers into a new array
  */
  
  //TESTS
  console.log(minMax([1, 2, 3, 4, 5])) /* returns [1, 5] */
  console.log(minMax([2334454, 5])) /* returns [5, 2334454] */
  console.log(minMax([5])) /* returns [5, 5] */

  //Solutions to Study

  /* function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
} */