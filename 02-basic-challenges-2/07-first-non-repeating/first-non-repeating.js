// function findFirstNonRepeatingCharacter(str) {
//   let uniqueletters = [];
//   let repeatedLetter = [];
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!uniqueletters.includes(str[i])) {
//       uniqueletters.push(str[i]);
//     } else if (uniqueletters.includes(str[i])) {
//       repeatedLetter.push(str[i]);
//     }
//   }

//   for (let i = 0; i < uniqueletters.length; i++) {
//     if (!repeatedLetter.includes(uniqueletters[i])) {
//       result = uniqueletters[i];
//       break;
//     }
//   }

//   if (result.length === 0) {
//     return null;
//   } else {
//     return result;
//   }
// }

function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  for (const char of str) {
    if (char in charCount) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
