// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a 
// function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//My Solution

function isIsogram(str){
    if(str.length === 0) return true
    let sortedStr = str.toLowerCase().split('').sort()
    for(let i = 1; i<sortedStr.length; i++) {
      if(sortedStr[i] === sortedStr[i-1]) {
        return false
      }
    }
    return true
  }