function threeSum(nums, target) {
  //your code here
	nums.sort((a, b) => a - b);

    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // Update closestSum if the current triplet is closer to the target
            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                closestSum = currentSum;
            }

            // Adjust pointers based on the current sum
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

module.exports = threeSum;
