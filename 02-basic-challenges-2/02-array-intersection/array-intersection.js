// function arrayIntersection(arr1, arr2) {
//   const noDuplicatedArr1 = new Set(arr1);
//   const noDuplicatedArr2 = new Set(arr2);

//   const intersectionNums = [];
//   for (const num of noDuplicatedArr1) {
//     if (noDuplicatedArr2.has(num)) {
//       intersectionNums.push(num);
//     }
//   }
//   return intersectionNums;
// }

function arrayIntersection(arr1, arr2) {
  const intersectionNums = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersectionNums.includes(arr1[i])) {
      intersectionNums.push(arr1[i]);
    }
  }
  return intersectionNums;
}

module.exports = arrayIntersection;
