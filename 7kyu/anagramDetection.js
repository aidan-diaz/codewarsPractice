/* DESCRIPTION:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK" */

//My Solution

//make both parameters lowercase
//sort each parameter
//if the sorted parameters equal each other, return true
//otherwise return false
const isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort().join('')
    original = original.toLowerCase().split('').sort().join('')
    return test == original ? true : false
  };
  
  //Parameters --> two strings to test against each other, to check if anagrams
  //Return true if anagrams, return false if not
  /*Examples
  - make both strings lowercase, sort both strings, if string1 == string2, return true, else return false
  */
  
  //TESTS
  console.log(isAnagram("dumble", "bumble")) /* return true */
  console.log(isAnagram("foefet", "toffee")) /* return false */
  console.log(isAnagram("Buckethead", "DeathCubeK")) /* return true */

  //Solutions to Study

  /* function isAnagram (test, original) {
	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
} */

/* function isAnagram(str1, str2){
    return sortWord(str1) == sortWord(str2);
}

function sortWord(word){
    return word.toLowerCase().split("").sort().join("");
} */