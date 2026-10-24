/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.isValid(root, -Infinity, Infinity)
    }

    isValid(curr, left, right) {
        if (!curr) return true

        if (!((left < curr.val) && (curr.val < right))) {
            return false
        }

        return this.isValid(curr.left, left, curr.val) && this.isValid(curr.right, curr.val, right)
    }
}
