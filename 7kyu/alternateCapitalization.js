/* DESCRIPTION:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */

//My Solution

//declare three variables, one for even caps, one for odd caps, and a new empty array
//split input string into an array
//map the array to capitalize even indecies and convert back into string
//push the updated string into a new array
//repeat steps 2-4 for odd capitalization
//return the new array
function capitalize(s){
    let capitalizedArr = []
    let evenCaps = s.split('').map((element, index) => index % 2 == 0 ? element.toUpperCase() : element).join('')
    let oddCaps = s.split('').map((element, index) => index % 2 == 1 ? element.toUpperCase() : element).join('')
    capitalizedArr.push(evenCaps, oddCaps)
    return capitalizedArr
  };
  
  //Parameters -> one lowercase input string with no spaces
  /* Return -> an array of two elements, where the first element capitalizes all even idecies of the input string,
  and the second element capitalizes all odd indecies of the input string */
  /*Examples: 
  -split string into an array, capitalize all even indecies, 
  join back into a string, and push the new string into a new array.
  Repeat process for odd indecies.
  -run two loops, one to capitalize even indecies and push new string to an array, and repeat for odd indecies.
  */
  
  //TESTS
  console.log(capitalize("abcdef")) /* return ['AbCdEf', 'aBcDeF'] */  
  console.log(capitalize("codewars")) /* return ['CoDeWaRs', 'cOdEwArS'] */
  console.log(capitalize("abracadabra")) /* return ['AbRaCaDaBrA', 'aBrAcAdAbRa'] */
  console.log(capitalize("codewarriors")) /* return ['CoDeWaRrIoRs', 'cOdEwArRiOrS'] */

  //Solutions to Study

  /* function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
}; */