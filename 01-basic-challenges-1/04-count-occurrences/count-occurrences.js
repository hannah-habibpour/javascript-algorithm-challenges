function countOccurrences(string, key) {
  size = string.length;
  time = 0;
  for (i = 0; i < size; i++) {
    if (string[i] === key) {
      time += 1;
    }
  }
  return time;
}

module.exports = countOccurrences;
