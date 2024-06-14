// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

//My Solution

function isPalindrome(x) {
    if(x.length === 0) return true
    for(let i = 0; i <= x.length - 1; i++) {
      if(x.toLowerCase()[i] !== x.toLowerCase()[x.length - (i+1)]) {
        return false
      }
    }
    return true
  }
  