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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const res = {
            answer: root.val,
            counter: 0
        }

        this.dfs(root, k, res)

        return res.answer
    }

    dfs(root, k, res) {
        if (!root) return

        this.dfs(root.left, k, res)
        res.counter += 1
        if (res.counter == k) res.answer = root.val
        this.dfs(root.right, k, res)
    }
}
