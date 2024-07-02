function countVowels(str) {
  str = str.toLowerCase();
  let vowels = 0;

  for (i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "i"
    ) {
      vowels += 1;
    }
  }
  return vowels;
}

module.exports = countVowels;
