// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//My Solution

function isPangram(string){
    //set (initialize) a variable with all lowercase letters
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    //take the input string, set it to lowercase, use the regexp to separate 
    //everything that is not a lowercase letter and 'replace' it with an empty string (remove it).
    //This leaves you with only lowercase letters.
    let letters = string.toLowerCase().replace(/[^a-z]/g, '')
    //the act of creating a Set with the variable 'letters', which consists of only lowercase letters, 
    //removes any duplicate letters. If the length (size) of 'letters' is the same as 'alphabet' then 
    //that means that it should contain all 26 letters and be a pangram.
    return new Set(letters).size === alphabet.length
  }