// Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?

function ex01(str) {

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let sameCharOnce = 0;
    for (let j = 0; j < str.length; j++) {
      const el = str[j];
      if (char == el) {
        if (sameCharOnce == 0) {
          sameCharOnce = 1;
        } else {
          return false
        }
      } 
    }
  }
  return true
}

console.log(ex01('blaera'))