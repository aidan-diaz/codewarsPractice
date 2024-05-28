/* DESCRIPTION:
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4 */

//My Solution

//declare variable of points, set to 0
//make for loop where i = 0, run while i < games.length, i++
//if score1 > score2, points += 3
//if score1 < score2, points += 0
//if score1 == score2, points += 1
//return points

function points(games) {
    let points = 0
    for(let i = 0; i < games.length; i++) {
      let ourScore = games[i].charAt(0)
      let opponentScore = games[i].charAt(2)
      if(ourScore > opponentScore){
        points += 3
      } else if(ourScore == opponentScore) {
        points += 1
      }
    }
    return points
  }
  
  /* Parameter: an array of 10 games, where each element displays our team's score first, 
  folowed by a colon and the opponent's score */
  /* Return:
    -total points
  */
  /* Possible Examples:
  - use conditionals to compare scores and add to points when needed
  - use array.map to see if element[0] > element[2] etc., and increment accordingly
  - use array.forEach to see if element[0] > element[2] etc., and increment accordingly
  */
  
  //TESTS
  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) /* return 30 */
  console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])) /* return 10 */
  console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])) /* return 0 */

//Solutions to Study

/* const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0) */

/* const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0) */