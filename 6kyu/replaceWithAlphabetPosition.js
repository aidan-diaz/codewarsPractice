/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" */

//My Solution

//create array, where each element is a character in the alphabet
//create an empty array to store alphabet position values in
//make sure that all input characters are lowercase, to avoid case sensitivity issues
//map alphabet position value of each string character into empty array variable
//filter out anything that isn't an alphabet position value
//join updated array variable back into a string with a space between each element
//return the new string

function alphabetPosition(text) {
    const position = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const positionText = []
    return text.toLowerCase().split('').map(x => position.indexOf(x)).filter(x => x > 0).join(' ')
  }
  
  //Parameters --> one input string of alphabetic characters
  //Return --> a string of every letter of the string with its position in the alphabet (ex. 'a' = 1, 'b' = 2, etc.)
  /* Examples:
  - create an array of all alphabet characters, have the index equal its position in the alphabet.
  return the corresponding array index of each string character 
  */
  
  //TESTS
  console.log(alphabetPosition("The sunset sets at twelve o' clock.")) /* returns "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" */
  console.log(alphabetPosition("The narwhal bacons at midnight.")) /* returns "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20" */

//Solutions to Study

/* function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
} */