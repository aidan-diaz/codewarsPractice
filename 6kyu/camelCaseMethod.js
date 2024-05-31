/* DESCRIPTION:
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord" */

//My Solution

//target the string that the method will be called on by using the 'this' keyword
//convert 'this' into an array by splitting at spaces
//map each array element to capitalize the first character
//join back into a string without spaces
//return the updated string

String.prototype.camelCase=function(){
    return this.split(' ').map(element => element.charAt(0).toUpperCase() + element.slice(1)).join('')
  }
  
  //Parameters -> none
  //Return -> a camelCased string (capitalize first letter of all words, then remove spaces)
  /*Examples:
  -split the string into an array by spaces, 
  capitalize the first character of each array element,
  join the elements back into a string without spaces
  */
  
  console.log("test case".camelCase()) /* return "TestCase" */
  console.log("camel Case method".camelCase()) /* return "CamelCaseMethod" */ 
  console.log("say hello".camelCase()) /* return "SayHello" */
  console.log("camel case word".camelCase()) /* return "CamelCaseWord" */ 
  console.log("".camelCase()) /* return "" */