// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

//My Solution

function century(year) {
    year = year.toString()
    if(year[year.length-1] !== '0' || year[year.length - 2] !== '0'){
      return +year.slice(0, year.length - 2) + 1
    }else{
      return +year.slice(0, year.length - 2)
    }
  }