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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const res = {
            same: true
        }

        this.dfs(p, q, res)

        return res.same
    }

    dfs(p, q, res) {
        if (!p && !q) {
            return 
        }

        if (!p || !q || p.val !== q.val) {
            res.same = false
            return 
        }

        this.dfs(p.left, q.left, res) 
        this.dfs(p.right, q.right, res)
    }
}
