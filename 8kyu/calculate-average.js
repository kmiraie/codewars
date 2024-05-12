// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//My Solution

function findAverage(array) {
    let sum = array.reduce((ac, cv) => ac + cv, 0)
    return sum > 0 ? sum/array.length : 0
  }