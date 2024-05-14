/* DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */

// My Solution
function solution(str){
    let emptyString = '';
    for(let i = str.length - 1; i >= 0; i--) {
      emptyString = emptyString + str.charAt(i);
    }
    return emptyString
  }

// Solutions to Study

/* const solution = str => str.split('').reverse().join(''); */

/* const solution = s => [...s].reverse().join('') */