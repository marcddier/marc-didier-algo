// Write code to reverse a String

function ex02(str) {
  res = "";
  for (let i = str.length -1 ; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

console.log(ex02('blaera'));