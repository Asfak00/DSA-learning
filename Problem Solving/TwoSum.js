function twoSum(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    let reamning = target - nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (reamning === nums[j]) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([3, 2, 3], 6));
