class Solution {
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        return Math.max(
            nums[0],
            this.helper(nums.slice(1)), 
            this.helper(nums.slice(0, -1))
        )
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    helper(nums) {
        let one = 0;
        let two = 0;

        for (let num of nums) {
            let temp = Math.max(two, num + one)
            one = two
            two = temp
        }

        return Math.max(one, two)
    }
}
