/* DESCRIPTION:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck! */

//My Solution

//create a double string variable
//create for loop to run once for each character in string
//concatenate two of each character to new string
//return new string

function doubleChar(str) {
    let doubleString = ''
    for(let i = 0; i < str.length; i++) {
      doubleString += str[i] + str[i]
    }
    return doubleString
  }
  
  //Parameters --> one input string
  //Return --> a new string, where each character from the original string is repeated once (CASE SENSITIVE)
  /* EXAMPLES:
  - for loop, add two of each character to a new string
  -convert to array, map array so that each element contains the character twice, convert back to string
  */
  
  //TESTS
  console.log(doubleChar("abcd")) /* returns "aabbccdd" */
  console.log(doubleChar("Adidas")) /* returns "AAddiiddaass" */
  console.log(doubleChar("1337")) /* returns "11333377" */
  console.log(doubleChar("illuminati")) /* returns "11333377" */
  console.log(doubleChar("illuminati")) /* returns "iilllluummiinnaattii" */
  console.log(doubleChar("%^&*(")) /* returns "%%^^&&**((" */

//Solutions to Study

/* const doubleChar = (str) => str.split("").map(c => c + c).join(""); */