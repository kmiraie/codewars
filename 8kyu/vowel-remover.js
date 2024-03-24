// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//My Solution

function shortcut (string) {
    let vowels = ['a','e','i','o','u'];
     return string.split('').filter(char => !vowels.includes(char)).join('')
 }