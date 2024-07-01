function reverseString(string) {
  let word = "";
  for (i = string.length - 1; i >= 0; i--) {
    word += string[i];
  }
  return word;
}

module.exports = reverseString;
