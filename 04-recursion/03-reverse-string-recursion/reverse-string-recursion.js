// function reverseString(str) {
//   if (str === "") {
//     return "";
//   }

//   let reversedStr = str.slice(-1);

//   const newStr = str.slice(0, -1);

//   reverseString(newStr);

//   return reversedStr;
// }

function reverseString(str) {
  if (str === "") {
    return "";
  }

  const reversedStr = str.slice(-1) + reverseString(str.slice(0, -1));
  return reversedStr;
}

module.exports = reverseString;
