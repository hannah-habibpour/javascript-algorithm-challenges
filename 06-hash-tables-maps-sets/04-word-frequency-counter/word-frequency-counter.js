function wordFrequencyCounter(str) {
  str = str.toLowerCase();
  const words = str.toLowerCase().split(/\W+/);
  const frequentyMap = new Map([]);

  for (const word of words) {
    if (word === "") continue;

    if (frequentyMap.has(word)) {
      frequentyMap.set(word, frequentyMap.get(word) + 1);
    } else {
      frequentyMap.set(word, 1);
    }
  }

  return frequentyMap;
}

module.exports = wordFrequencyCounter;
