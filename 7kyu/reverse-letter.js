// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//My Solution

function reverseLetter(str) {
    let lettersOnly = ''
    let letter = 'abcdefghijklmnopqrstuvwxyz'
    for(let i = 0; i < str.length; i++) {
      if (letter.includes(str[i])) {
        lettersOnly += str[i]
      }
    }
    return lettersOnly.split('').reverse().join('')
  }