/* DESCRIPTION:
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false. */

// My Solution
function periodIsLate(last, today, cycleLength) {
    let diff = Math.abs(today - last) / (1000 * 60 * 60 * 24)
   if (diff > cycleLength) {
     return true;
   } else {
   return false;}
 
 }

// Solutions to Study

/* function periodIsLate(last, today, c){
  return (last.setDate(last.getDate()+c),last<today)
} */

/* function periodIsLate(last, today, cycleLength) {
    return (today - last) / 86400000 > cycleLength;
  } 
  
  1 sec = 1000 msec
  1 min = 60 sec = 60000 msec
  1 hour = 60 min = 3600 sec = 36000000 msec
  1day = 24 hours = 1440 min = 86400 sec = 1000 * 3600 * 24 = 86400000 msec */