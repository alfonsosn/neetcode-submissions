class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    let l = 0;
    let r = height.length - 1
    let leftMax = 0
    let rightMax = 0
    let trapped = 0

    while (l < r) {
        if (height[l] < height[r]) {
            if (height[l] >= leftMax) {
                leftMax = height[l];
            } else {
                trapped += leftMax - height[l];
            }

            l++
        } else {
            if (height[r] >= rightMax) {
                rightMax = height[r];
            } else {
                trapped += rightMax - height[r];
            }

            r--;
        }
    }


    return trapped
}
}
