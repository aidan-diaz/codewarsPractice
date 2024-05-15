/* DESCRIPTION:
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square */

// My Solution
function findNextSquare(sq) {
    let i = sq
    while(i < Infinity) {
      if(Math.sqrt(i) % 1 === 0 && i !== sq) {
        return i;
      } else if(Math.sqrt(sq) % 1 !== 0) {
        return -1;
      }
      i++;
    }
  }

// Solutions to Study

/* function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
} */

/* function findNextSquare(sq) {
    let r = Math.sqrt(sq)
    return r % 1 ? -1 : ++r * r
} */