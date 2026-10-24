class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
    let max = 1; 
    let min = 1; 
    let res = -Infinity; 

    for (let num of nums) {
        if (num < 0) {
            [max, min] = [min, max]
        }

        max = Math.max(num, num * max);
        min = Math.min(num, num * min);

        res = Math.max(res, max);
    }

    return res;
    }
}