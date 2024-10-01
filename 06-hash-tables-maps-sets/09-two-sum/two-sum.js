function twoSum(nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (result.includes(complement)) {
      return [nums.indexOf(complement), i];
    }
    result.push(nums[i]);
  }

  return [];
}

module.exports = twoSum;
