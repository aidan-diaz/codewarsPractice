/* DESCRIPTION:
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

//My Solution

//split the URL string by any #
//return the first element of the new array as a string

const removeUrlAnchor = url => url.split('#')[0]

//Parameter -> a string that is a URL
//Return the same URL, but with anything after the anchor(#) removed
/*Examples
- split the string at any anchor tags, then convert the 0th index of the array back into a string,
return the 0th index as a string
*/

//TESTS
console.log(removeUrlAnchor('www.codewars.com#about')) /* return 'www.codewars.com' */
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')) /* return 'www.codewars.com/katas/?page=1' */
console.log(removeUrlAnchor('www.codewars.com/katas/')) /* return 'www.codewars.com/katas/' */