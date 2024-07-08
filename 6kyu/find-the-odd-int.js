// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//My Solution

function findOdd(A) {
    //arrange the numbers in ascending order
    A.sort((a,b)=> a-b)
    
    let count = 1
    
    //start the loop on the second number and loop through checking the previous indexes 
    for(let i = 1; i < A.length; i++) {
      //if the current number is equal to the previous one, increment the count
      if(A[i] === A[i-1]) {
        count++
      }else{
        //if not equal, check if the count is odd
        if(count % 2 !== 0) {
          //if the count is odd and the current number is not the same as the previous one, return the previous number 
          return A[i-1]
          //otherwise reset the count to one and continue on with the next element
        }else{
          count = 1
        }
      }
    }
    //if the loop finishes before anything is returned, the previous return wont get a chance to run
    //if this is the case then check to see if the current count is odd and return if so 
    if(count % 2 !== 0) return A[A.length -1]
  }

