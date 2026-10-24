class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // brute force
        const hash = new Map()
        for (let i = 0; i < nums.length; i++) {
            hash.set(nums[i], i)
        }

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i]
            if (hash.has(complement) && hash.get(complement) != i) return [i, hash.get(complement)]
        }
    }
}
