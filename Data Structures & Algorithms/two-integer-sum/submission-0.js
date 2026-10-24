class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = new Map();
        let res = []

        nums.forEach((num, i) => {
            if (hash.has(target - num)) {
                res = [hash.get(target - num), i]
            }
            hash.set(num, i)
        })

        console.log(hash)

        return res
    }
}
