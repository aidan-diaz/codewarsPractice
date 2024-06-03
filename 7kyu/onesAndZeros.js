/* DESCRIPTION:
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4. */

//My Solution

//reverse the input array
//multiply each element by 2 to the nth power, where n is the element's index
//recude each product into a sum
//return the sum (the sum will be equal to the binary value converted to an integer)

const binaryArrayToNumber = arr => {
    return arr.reverse().map((element, index) => element * Math.pow(2, index)).reduce((acc, current) => acc + current)
  };
  
  
  //Parameters -> one input array consisting of all ones and zeros as elements
  //Return -> an integer that is equivalent to the binary value
  /* Examples:
  -reverse the input array, multiply each element by 2 to the nth power, 
  where n = the element index, and add product to sum
  */
  
  //TESTS
  console.log(binaryArrayToNumber([0,0,0,1])) /* return 1 */
  console.log(binaryArrayToNumber([0,0,1,0])) /* return 2 */
  console.log(binaryArrayToNumber([1,1,1,1])) /* return 15 */
  console.log(binaryArrayToNumber([0,1,1,0])) /* return 6 */

  //Solutions to Study

  /* const binaryArrayToNumber = arr => parseInt(arr.join(''), 2); */