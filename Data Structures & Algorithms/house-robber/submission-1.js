class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = {}

        const dfs = (i) => {
            if (i >= nums.length) {
                return 0
            } 

            if (memo[i]) {
                return memo[i]
            } 
            
            let max = nums[i] + Math.max(dfs(i + 2), dfs(i + 3))

            memo[i] = max
            
            return memo[i];
        }

        return Math.max(dfs(0), dfs(1))
    }
}
