// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the 
// numbers together and divide by the number of values in the list.

//My Solution

var findAverage = function (nums) {
    return nums.reduce((a,c)=> a+c,0)/(nums.length)
  }