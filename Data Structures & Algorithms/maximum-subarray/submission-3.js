class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSub = nums[0];
        let curr = 0


        for (let i = 0; i < nums.length; i++) {
            if (curr < 0) {
                curr = 0
            }
            
            curr += nums[i]

            maxSub = Math.max(maxSub, curr)
        }

        return maxSub
    }
}
