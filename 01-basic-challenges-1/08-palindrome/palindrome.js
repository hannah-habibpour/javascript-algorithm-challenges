function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversed = "";

  for (i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  //   for (i = 0; i < str.length; i++) {
  //     if (str[i] === reversed[i]) {
  //       result = true;
  //     } else {
  //       result = false;
  //       break;
  //     }
  //   }

  //   return result;

  return str === reversed;
}

module.exports = isPalindrome;
