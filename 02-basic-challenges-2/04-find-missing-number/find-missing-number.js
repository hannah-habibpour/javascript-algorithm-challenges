function findMissingNumber(arr) {
  const arrSize = arr.length + 1;
  let missingNum;
  for (let i = 1; i <= arrSize; i++) {
    if (!arr.includes(i)) {
      missingNum = i;
    }
  }

  return missingNum;
}

module.exports = findMissingNumber;
