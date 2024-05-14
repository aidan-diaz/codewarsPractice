/* DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

// My Solution
function findAverage(array) {
    const sum = array.reduce((acc, current) => acc + current, 0);
    if(sum === 0) {
      return 0;
    } else {
      return sum / array.length
    }
  }

// Solutions to Study

/* var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
} */