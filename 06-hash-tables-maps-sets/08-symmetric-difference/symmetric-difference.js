function symmetricDifference(arr1, arr2) {
  const arrSet1 = new Set(arr1);
  const arrSet2 = new Set(arr2);
  const symmetricArr = [];

  for (const number of arrSet1) {
    if (!arrSet2.has(number)) {
      symmetricArr.push(number);
    }
  }

  for (const number of arrSet2) {
    if (!arrSet1.has(number)) {
      symmetricArr.push(number);
    }
  }
  return symmetricArr;
}

module.exports = symmetricDifference;
