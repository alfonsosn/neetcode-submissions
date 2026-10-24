class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let dp = [...nums]
        let max = nums[0];

        for (let i = 1; i < nums.length; i++) {
            dp[i] = Math.max(nums[i], dp[i - 1] + dp[i])    
            max = Math.max(dp[i], max)
        }

        return max
    }
}
