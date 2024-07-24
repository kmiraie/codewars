// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

//My Solution

function invert(array) {
    let invertedArray = []
    for(let i = 0; i<array.length; i++) {
      invertedArray.push(array[i]*-1)
    }
   return invertedArray
 }