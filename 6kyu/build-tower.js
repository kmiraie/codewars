// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

//My Solution

function towerBuilder(nFloors) {
    const tower = [];
    const maxWidth = (nFloors * 2) - 1
    
    for(let i = 0; i < nFloors; i++) {
      const spaces = ' '.repeat((maxWidth - (i * 2 + 1)) / 2);
      const blocks = '*'.repeat(i * 2 + 1);
      tower.push(spaces + blocks + spaces);
    }
    return tower
  }
