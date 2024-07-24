/*
Quadradic Time O(n^2)

Quadradic time means that the time required to complete a function is proportional to the square of the input data set.
*/

function sumArray(arr) {
  let sum = 0; // 1
  let sum2 = 0; // 1

  for (let i = 0; i < arr.length; i++) {
    // n + 1
    sum += arr[i]; //n + 2
    for (let j = 0; j < arr.length; j++) {
      // n (n+1)
      sum2 += arr[j]; // n(n+2)
    }
  }

  return sum + sum2; // 1
}
