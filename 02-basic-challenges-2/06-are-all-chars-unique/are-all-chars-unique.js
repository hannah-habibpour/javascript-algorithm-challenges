function areAllCharactersUnique(str) {
  let uniqueLetters = [];

  for (let i = 0; i < str.length; i++) {
    if (!uniqueLetters.includes(str[i])) {
      uniqueLetters.push(str[i]);
    } else if (uniqueLetters.includes) {
      return false;
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;
