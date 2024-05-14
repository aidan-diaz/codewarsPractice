/* DESCRIPTION:
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0] */

// My Solution
function digitize(n) {
    n = String(n);
    let newArr = (n.split('').reverse());
    return newArr.map(x => Number(x))
  }

// Solutions to Study

/* function digitize(n) {
  return String(n).split('').map(Number).reverse()
} */