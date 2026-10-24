class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        
        for (var i = 0; i < matrix.length; i++) {
            if (this.binarySearch(matrix[i], target)) return true
        }

        return false
    }

    binarySearch(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            let mid = Math.floor((right + left) / 2);

            if (target == nums[mid]) return true; 
            if (target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        }

        return false
    }
}
