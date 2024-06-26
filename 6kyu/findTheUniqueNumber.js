/* DESCRIPTION:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique */

// My Soultion
function findUniq(arr) {
    arr = arr.sort();
    if(arr[0] === arr[1]) {
      return arr.pop()
    } else {
      return arr[0]
    }
  }

// Solutions to Study

/* function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
} */

/* function findUniq(arr) {
  return arr.find(e => arr.lastIndexOf(e) === arr.indexOf(e))
} */
