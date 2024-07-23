function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return [parseInt(arr.toString())];
  }

  let flattedArr = [];
  arr.forEach((item) => {
    flattedArr = flattedArr.concat(flattenArray(item)); // Concatenate results of recursive calls
  });

  return flattedArr;
}

module.exports = flattenArray;
