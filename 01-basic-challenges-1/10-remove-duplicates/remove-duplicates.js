// function removeDuplicates(arr) {
//   let finalArr = [];
//   for (i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//     for (j = 0; j < finalArr.length; j++) {
//       if (finalArr[j] === arr[i]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       finalArr.push(arr[i]);
//     }
//   }

//   return finalArr;
// }

function removeDuplicates(arr) {
  const finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!finalArr.includes(arr[i])) {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}

module.exports = removeDuplicates;
