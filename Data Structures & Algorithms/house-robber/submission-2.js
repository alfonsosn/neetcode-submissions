class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let one = 0
        let two = 0

        for (let num of nums) {
            let temp = Math.max(two, one + num)
            one = two
            two = temp
        }
        
        return Math.max(one, two)
    }
}
