class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const helper = i => {
            if (i == nums.length) return [[]]

            let res = []
            let perms = helper(i + 1)

            for (let p of perms) {
                for (let k = 0; k < p.length + 1; k++) {
                    let copy = [...p]
                    copy.splice(k, 0, nums[i])
                    res.push(copy)
                }
            }

            return res
        }

        return helper(0)
    }
}
