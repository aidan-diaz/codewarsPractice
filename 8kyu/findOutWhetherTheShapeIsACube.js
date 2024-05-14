/* DESCRIPTION:
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer */

// My Solution
function cubeChecker(volume, side){
    if(volume > side && side * side * side === volume) {
      return true;
    } else if(volume === side && side * side * side === 1) {
      return true;
    } else if(volume <= 0 || side <= 0) { 
    return false;
    } else {
      return false;
    }
  };

//   Solutions to Study
/* var cubeChecker = function(volume, side){
    return Math.pow(side, 3) === volume && side > 0;
  }; */


/* const cubeChecker = (volume, side) => volume > 0 && side > 0 && volume === Math.pow(side, 3); */