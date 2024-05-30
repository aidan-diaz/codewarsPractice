/* DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

//My Solutions

//set str to equal str.slice(ending.length)
//if str.slice(ending.length) == ending, return true
//otherwise return false

const solution = (str, ending) => str.slice(-ending.length) == ending || str.slice(ending.length) == str ? true : false
//Parameters -> two strings
/* Return -> if the first string ends with the second string, return true.
Otherwise, return false */

/*Examples
-slice/substring the end of the first string by the length of the second string,
compare the sliced string to the second string.
*/

//TESTS
console.log(solution('abcde', 'cde')) /* return true */
console.log(solution('abcde', 'abc')) /* return false */
console.log(solution('samurai', 'ai')) /* returns true */
console.log(solution('abc', '')) /* returns true */

//Solutions to Study

/* function solution(str, ending){
  return str.endsWith(ending);
} */

/* function solution(str, ending){
  return str.substr(-ending.length) == ending;
} */