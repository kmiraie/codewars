//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//My Solution

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
  }