class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const curr = []
        const sets = []

        this.dfs(nums, 0, curr, sets)

        return sets
    }

    dfs(nums, i, curr, sets) {
        if (i == nums.length) {
            sets.push(curr.slice())
            return 
        }

        // include i
        curr.push(nums[i])
        this.dfs(nums, i + 1, curr, sets)

        // not include i
        curr.pop()
        this.dfs(nums, i + 1, curr, sets)
    }
}
