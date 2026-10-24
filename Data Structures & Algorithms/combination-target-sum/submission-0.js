class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = []
        this.dfs(nums, 0, [], res, target)
        return res
    }

    dfs(nums, i, curr, res, target){
        if (target === 0) {
            res.push([...curr])
            return
        }

        if (target < 0 || i >= nums.length) return

        curr.push(nums[i])
        this.dfs(nums, i, curr, res, target - nums[i])
        curr.pop()
        this.dfs(nums, i + 1, curr, res, target)
    }
}
