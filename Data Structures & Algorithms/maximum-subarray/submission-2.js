class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -Infinity
        for (let i = 0; i < nums.length; i++) {
            let sum = 0
            for (let k = i; k < nums.length; k++) {
                sum += nums[k]
                max = Math.max(sum, max)
            }
        }

        return max
    }
}
