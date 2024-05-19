/* DESCRIPTION: 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

// My Solution
function countPositivesSumNegatives(arr) {
    // countOf positives set to 0, add one for each positive number
      let countOfPositives = 0
    // sumOfNegatives variable set to 0, to add all negative nums
      let sumOfNegatives = 0

    if(arr == [] || arr == null) {
        return []
    }
    // for loop, count for each element in array (array length)
      for(let i = 0; i < arr.length; i++) {
        // if index of array is greater than 0, add 1 to count of positives
        if(arr[i] > 0) {
          countOfPositives += 1
          // if index of array is less than zero, add that value to the sumOfNegatives// if index of array is less than zero, add that value to the sumOfNegatives
        }else if(arr[i] < 0) {
          sumOfNegatives += arr[i]
        }
        }
        // return array where first value is countOfPositives and second is sumOfNegatives
        // if given array is empty or null, return empty array []
        return countOfPositives == 0 && sumOfNegatives == 0 ? [] : [countOfPositives, sumOfNegatives]
      }



// return array with two elements
// first element is count of positive nums in given array
// second element is sum of negative nums in array
// if array is empty or null, return empty array



console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))

