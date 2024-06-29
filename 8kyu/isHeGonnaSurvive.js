/* DESCRIPTION:
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :) */

//My Solution

//divide num of bullets by num of dragons
//if quotient is 2 or greater, return true (need two bullets per dragon)
//if both parameters are 0, return true (no dragons to defeat, no bullets needed)
//if quotient is less than 2, return false (not enough bullets for every dragon)

function hero(bullets, dragons){
    if(bullets / dragons >= 2) {
      return true
    }else if(bullets == 0 && dragons == 0) {
      return true
    }else{
      return false
    }
    
  }
  
  //Parameters --> two integer inputs - one number of bullets input & one number of dragons input
  //Return --> true if the hero has enough bullets to defeat all of the dragons, false otherwise
  /* Examples:
  - conditional, divide num dragons by num bullets, if quotient >= 2, return true
  - switch case - in case of dragons / bullets >= 2, return true, false otherwise
  - ternary expression
  */
  
  //TESTS
  console.log(hero(10, 5)) /* returns true */
  console.log(hero(7, 4)) /* returns false */
  console.log(hero(4 ,5)) /* returns false */
  console.log(hero(100, 40)) /* returns true */

//Solutions To Study

/* function hero(bullets, dragons){
  return bullets >= dragons * 2
} */