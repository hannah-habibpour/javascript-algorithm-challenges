function findMissingLetter(arr) {
  const missingCharCode = arr.filter((char, index) => {
    // if the index is 0 then return false
    if (index === 0) return false;
    // `prevCharCode` is the character code of the previous character
    const prevCharCode = arr[index - 1].charCodeAt(0);
    // `currentCharCode` is the character code of the current character
    const currentCharCode = char.charCodeAt(0);
    // if the current character code is more than one greater than the previous character code then return true
    return currentCharCode - prevCharCode > 1;
  })[0];

  // if `missingCharCode` is truthy then return the character that is one less than the character code
  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : "";
}

module.exports = findMissingLetter;
