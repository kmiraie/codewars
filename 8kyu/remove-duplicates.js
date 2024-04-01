// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

//My Solution

function distinct(a) {
    let nonDuplicates = []
    for(let i = 0; i<a.length; i++){
      if(!nonDuplicates.includes(a[i])){
        nonDuplicates.push(a[i])
      }
    }
    return nonDuplicates
  }