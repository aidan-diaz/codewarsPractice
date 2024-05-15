/* DESCRIPTION:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

// My Solution
function getCount(str) {
    str = str.toLowerCase()
    let vowelCount = 0
    for(let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case 'a':
          vowelCount += 1;
          break;
        case 'e':
          vowelCount += 1;
          break;
        case 'i':
          vowelCount += 1;
          break;
        case 'o':
          vowelCount += 1;
          break;
        case 'u':
          vowelCount += 1;
          break;
        default:
          vowelCount += 0;
      }
    }
    return vowelCount;
  }

// Solutions to Study

/* function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
} */

/* function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
} */