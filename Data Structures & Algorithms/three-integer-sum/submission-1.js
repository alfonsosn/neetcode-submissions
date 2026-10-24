class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (var i = 0; i < nums.length; i++) {
            /* 
                Since the array is sorted, 
                if the current number nums[i] is greater than 0, 
                any sum involving nums[i] 
                and subsequent numbers will also be greater than 0. 
                Thus, there’s no point in continuing the loop.
            */
            if (nums[i] > 0) break;
            /* 
            // This skips duplicate elements at index i. 
            // If the current number is the same as the previous one, 
            // we've already processed it, 
            // so there's no need to consider it again. 
            */
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let L = i + 1;
            let R = nums.length - 1;

            while (L < R) {
                const sum = nums[i] + nums[L] + nums[R];
                if (sum > 0) {
                    R--;
                } else if (sum < 0) {
                    L++;
                } else {
                    res.push([nums[i], nums[L], nums[R]])
                    L++;
                    R--;

                    // This ensures that the left pointer L skips over duplicate values. 
                    while (L < R && nums[L] === nums[L - 1]) {
                        L++;
                    }
                }
            }
        }

        return res;
    }
}
