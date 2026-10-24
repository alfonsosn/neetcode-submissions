class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort()
        const sets = []
        const curr = []

        this.dfs(nums, 0, curr, sets)

        return sets
    }

    dfs(nums, i, curr, sets){
        if (i == nums.length) {
            sets.push(curr.slice())
            return
        }

        curr.push(nums[i])
        this.dfs(nums, i + 1, curr, sets)

        while (i < nums.length && nums[i] == nums[i + 1]){
            i += 1
        }

        curr.pop()
        this.dfs(nums, i + 1, curr, sets)
    }
}
