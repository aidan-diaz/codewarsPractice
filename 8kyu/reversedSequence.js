/* DESCRIPTION:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1] */

// My Solution
const reverseSeq = n => {
    let arr = []
    for(let i = n; i > 0; i--) {
      arr.push(i)
    }
    return arr
  };
  
  
  // parameter is an integer greater than 0
  // return an array countdown from n to 1, with n > 0
  
  
  console.log(5) /* =>  [5,4,3,2,1] */
  
  console.log(10) /* => [10,9,8,7,6,5,4,3,2,1] */
  
  // variable empty array
  // loop
  
  // loop starts whatever the value of n is
  // push the value of n into arr,
  // decrement by 1
  // push value of n - 1 into array
  // decrement by 1
  // repeat process until n !> 0

// Solutions to Study

/* const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  }; */