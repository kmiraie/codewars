// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My Solution

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let allVowels = []
    for(let i = 0; i < str.length; i++) {
      if (vowels.includes(str.charAt(i))) {
        allVowels.push(str.charAt(i))
      }
    }
    return allVowels.join('').length
  }