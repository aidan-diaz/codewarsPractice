/* DESCRIPTION:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined */

// My Solution
function countSheeps(sheep) {
    let sumOfSheep = 0;
    sheep.forEach(element => element === true ? sumOfSheep += 1 : sumOfSheep += 0)
    return sumOfSheep
  }

// Solutions to Study

/* function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
} */