function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [endNum];
  }

  const numbers = numberRange(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}

module.exports = numberRange;
