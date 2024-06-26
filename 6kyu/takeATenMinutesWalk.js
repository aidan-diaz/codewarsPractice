/* DESCRIPTION:
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!). */

//My Solution

//declare a northSouth variable set to 0
//declare an eastWest variable set to 0
//if input array length is 10, start for loop, otherwise return false
//set for loop counter to 0, run while counter is less than input array length, incriment by 1
//if direction is north, add 1 to northSouth variable
//if direction is south, subtract 1 from northSouth variable
//if direction is east, add 1 to eastWest variable
//if direction is west, subtract one from eastWest variable
//if both variables equal zero after loop, return true, otherwise return false

function isValidWalk(walk) {
    let northSouth = 0
    let eastWest = 0
    if(walk.length == 10) {
      for(let i = 0; i < walk.length; i++) {
        walk[i] == 'n' ? northSouth += 1 : northSouth += 0
        walk[i] == 's' ? northSouth -= 1 : northSouth -= 0
        walk[i] == 'e' ? eastWest += 1 : northSouth += 0
        walk[i] == 'w' ? eastWest -= 1 : northSouth -= 0
      }
    } else {
      return false
    }
    return northSouth == 0 && eastWest == 0
  }
  
  //Parameters --> one input array, consisting of directional strings 'n', 's', 'e', 'w'
  /* Return --> true if walk takes 10 minutes and returns to starting point, 
  false otherwise 
  -one step in each direction (one string element) = 1 minute */
  
  /* Examples:
  -for loop, only run if array length is 10 (10 minute walk), return true if
  return to starting point
  */
  
  //TESTS
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) /* return true */
  console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) /* return false */
  console.log(isValidWalk(['w'])) /* return false */
  console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) /* return false */

//Solutions to Study

/* function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
} */

/* function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;
  
  return walk.length === 10 && north === south && east === west;
} */