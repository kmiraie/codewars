// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S 
// with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

//My Solution

function encrypt(text, n) {
    if(text === '' || n <= 0) return text
  
    for(let count = 0; count < n; count++) {
      let encrypted = ''
      for(let i = 1; i < text.length; i+=2) {
        encrypted += text[i]
      }
      for(let i = 0; i < text.length; i+=2) {
        encrypted += text[i]
      }
      text = encrypted
    }
    return text
  }
  
  function decrypt(encryptedText, n) {
    if (encryptedText === '' || n <= 0) return encryptedText;
    
    for (let count = 0; count < n; count++) {
      let decrypted = ''
      const mid = Math.floor(encryptedText.length / 2)
      const evenChars = encryptedText.slice(0, mid)
      const oddChars = encryptedText.slice(mid)
      
      for (let i = 0; i < evenChars.length; i++) {
        decrypted += oddChars[i] + (evenChars[i] || '')
      }
      
      // If the original string length is odd, append the last character from oddChars
      if (encryptedText.length % 2 !== 0) {
        decrypted += oddChars[oddChars.length - 1];
      }
      
      encryptedText = decrypted
    }
    
    return encryptedText
  }