// Write a method to decide if two strings are anagrams or not

function ex03 (str, anagram) {

  if (str === anagram) return true;
  if (str.length != anagram.length) return false;

}

console.log(ex03("abcd", "dcba"))