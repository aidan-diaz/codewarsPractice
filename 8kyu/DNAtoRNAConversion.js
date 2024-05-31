/* DESCRIPTION:
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'. */

//My Solution

//return dna.replaceAll() with arguments 'T' and 'U'

const DNAtoRNA = dna => dna.replaceAll('T', 'U')

//Parameters -> a string of DNA
//Return -> string of RNA (input string, but replace any instance of 'T' with 'U')
/*Examples:
- for loop, run once for each character in string, if 'T', return 'U' to new string, otherwise return character
- use replaceAll method
*/

//TESTS
console.log(DNAtoRNA("TTTT")) /* return 'UUUU' */
console.log(DNAtoRNA("GCAT")) /* return 'GCAU' */
console.log(DNAtoRNA("GACCGCCGCC")) /* return 'GACCGCCGCC' */