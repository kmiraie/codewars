// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

//My Solution

function alphabetPosition(text) {
    text = text.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for(let i = 0; i < text.length; i++) {
      if(alphabet.includes(text[i])) {
        result += (alphabet.indexOf(text[i]) + 1 + ' ')
      }
    }
    return result.trim()
  }