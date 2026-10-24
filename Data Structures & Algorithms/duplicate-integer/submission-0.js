class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate = (nums) => new Set(nums).size < nums.length
}
