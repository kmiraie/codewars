// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters 
// (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

//My Solution

var capitals = function (word) {
    let indices = []
      for(let i = 0; i<word.length; i++) {
      if(word[i] === word[i].toUpperCase()) {
        indices.push(i)
      }
    }
    return indices
  };