function titleCase(string) {
  let words = string.split(" ");

  for (i = 0; i < words.length; i++) {
    const firstLetter = words[i][0].toUpperCase();
    const restOfletters = words[i].substr(1).toLowerCase();
    const word = firstLetter + restOfletters;
    words[i] = word;
  }
  let result = words.join(" ");
  return result;
}

module.exports = titleCase;
