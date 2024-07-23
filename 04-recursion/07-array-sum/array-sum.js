function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return parseInt(arr.slice(0, 1)) + arraySum(arr.slice(1));
}

module.exports = arraySum;
