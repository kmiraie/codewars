// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

//My Solution

function minValue(values){
    let digits = []
    for(let i = 0; i<values.length; i++) {
      if(!digits.includes(values[i])) {
        digits.push(values[i])
      }
    }
    return +digits.sort((a,b)=> a-b).join('')
  }