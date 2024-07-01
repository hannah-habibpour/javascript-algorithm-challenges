function findMaxNumber(array) {
  finder = array[0];

  for (i = 0; i < array.length; i++) {
    if (array[i] >= finder) {
      finder = array[i];
    }
  }
  return finder;
}

module.exports = findMaxNumber;
