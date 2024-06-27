/* Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */

//My Solution

//target the string that the method is appended to using this keyword
//split the string into an array by spaces, to make each word its own element
//target the 0th index of each element to capitalize it
//concatenate the rest of each element to the capitalized letter
//join the array back into a string
//return the updated string

String.prototype.toJadenCase = function () {
    let arrayFromString = this.split(' ')
    let capitalizedWords = arrayFromString.map(x => x[0].toUpperCase() + x.slice(1, x.length)).join(' ')
    return capitalizedWords
  };
  
  
  //Parameters --> none, this is a method that all strings will be able to inherit
  //Return --> the same string that the method was called upon, but with the first letter of each word in the string capitalized
  /* Examples:
  - split the string into an array, capitalize the first letter, and join back into a string to return it
  */
  
  //TESTS
  console.log("How can mirrors be real if our eyes aren't real".toJadenCase()) /* returns "How Can Mirrors Be Real If Our Eyes Aren't Real" */