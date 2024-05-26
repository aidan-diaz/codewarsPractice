/* DESCRIPTION:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */

// My Solution

//split dna into an array, where each string index is it's own array element
/* map the array and return the following to the new array: 
- 'A' when index is 'T'
- 'T' when index is 'A'
- 'C' when index is 'G'
- 'G' when index is 'C'*/
//join the array back into one string
//and return the new string
function dnaStrand(dna){
    dna = dna.split('').map(element => {
      if(element == 'A') {
        return 'T'
      } else if(element == 'T') {
        return 'A'
      } else if(element == 'C') {
        return 'G'
      } else {
        return 'C'
      }
    }).join('')
    return dna
  }
  
  //Parameter is a string of DNA
  //Return 'A' when string index is 'T'
  //Return 'T' when string index is 'A'
  //Return 'C' when string index is 'G'
  //Return 'G' when string index is 'C'
  //Return all of this as one new string
  
  //EXAMPLES
  console.log(dnaStrand('AAAA')) /* return 'TTTT' */
  console.log(dnaStrand('ATTGC')) /* return 'TAACG' */
  console.log(dnaStrand('GTAT')) /* return 'CATA' */

// Solutions to Study

/* var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
} */