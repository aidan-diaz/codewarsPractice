/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input! */

//My Solution

//convert the input string to all lowercase
//convert lowercase string to array
//map array to ( if element occurs once, and ) if occurs more than once
//convert back to string
//return updated string

function duplicateEncode(word){
    let lowerWord = word.toLowerCase()
    let codedWord = lowerWord.split('').map(x => lowerWord.indexOf(x) == lowerWord.lastIndexOf(x) ? '(' : ')').join('')
    return codedWord
  }
  
  //Parameters --> one input string
  //Return --> ( if the character only occurs once in the string, and ) if it occurs more than once. Ignore case.
  /* Examples:
  -convert string to array, map each element to ( if appears once, and ) if appears multiple
  */
  
  //TESTS
  console.log(duplicateEncode("din")) /* returns "(((" */
  console.log(duplicateEncode("recede")) /* returns "()()()" */
  console.log(duplicateEncode("Success")) /* returns ")())())" */
  console.log(duplicateEncode("(( @")) /* returns "(( @"),"))((" */

//Solutions to Study

/* function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
} */