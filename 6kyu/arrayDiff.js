/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */

//My Solution

//append filter iterator method to array a
//filter by array b
//if any index of array a equals any index of array b, remove that index from array a
//return the filtered array

function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x))
  }

//Parameters --> two input arrays of integers
//Return --> the difference between the two arrays (remove all instances of array b from array a and return)
/* Examples:
- filter out all instance of array b in array a
- nested for loop, one loop iterates through array a, other through b. 
If index of array a = index of array b, remove it from array a
*/

//TESTS
console.log(arrayDiff([1,2], [1])) /* returns [2] */
console.log(arrayDiff([1,2,2], [1])) /* returns [2,2] */
console.log(arrayDiff([1,2,2], [2])) /* returns [1] */
console.log(arrayDiff([1,2,3], [1,2])) /* returns [3] */

//Solutions to Study

/* function array_diff(a, b) {

    var arr = new Array();
    
    for(var i = 0;i<a.length;i++){
        if(b.indexOf(a[i])<0){
            arr.push(a[i]);
        }
    }
  
    return arr;
} */
