function anagramGrouping(words) {
  const anargamMap = new Map();

  for (const word of words) {
    const sortedChars = word.split("").sort().join("");

    if (anargamMap.has(sortedChars)) {
      anargamMap.get(sortedChars).push(word);
    } else {
      anargamMap.set(sortedChars, [word]);
    }
  }

  return Array.from(anargamMap.values());
}

module.exports = anagramGrouping;
