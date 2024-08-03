// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and 
// your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

//My Solution

function solve(s){
    let lowerCase = []
    let upperCase = []
      for(let i = 0; i<s.length; i++) {
        if(s[i] === s[i].toLowerCase()){
          lowerCase.push(s[i])
        }else{
          upperCase.push(s[i])
        }
      }
    if(lowerCase.length >= upperCase.length) {
      return s.toLowerCase()
    }else{
      return s.toUpperCase()
    }
  }