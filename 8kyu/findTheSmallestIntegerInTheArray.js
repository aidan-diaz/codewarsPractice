/* DESCRIPTION:
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

// My Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      const sorted = args.sort((a,b) => a - b);
      return sorted[0]
    }
  }

// Solutions to Study

/* class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
} */

/* class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
} */