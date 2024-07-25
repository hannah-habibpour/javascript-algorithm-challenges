function maxSubarraySum(arr, k) {
  let maxSubarray = -Infinity;
  for (let i = 0; i < arr.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < k + i; j++) {
      currentSum += arr[j];
    }
    if (maxSubarray < currentSum) {
      maxSubarray = currentSum;
    }
  }
  return maxSubarray;
}

module.exports = maxSubarraySum;
