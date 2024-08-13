// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

//My Solution

function capitalize(s){
    let evenCapital=''
    let oddCapital=''
    for(let i = 0; i<s.length; i++) {
      if(i%2===0) {
        evenCapital += s[i].toUpperCase();
        oddCapital += s[i];
      }else{
        evenCapital += s[i];
        oddCapital += s[i].toUpperCase();
      }
    }
    return [evenCapital, oddCapital]
  };