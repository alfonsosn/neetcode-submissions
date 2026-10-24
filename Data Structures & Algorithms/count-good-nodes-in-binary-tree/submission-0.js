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
     * @return {number}
     */
    goodNodes(root) {
        const res = {
            nodes: 0
        }

        this.dfs(root, root.val, res)

        return res.nodes
    }

    dfs(node, prev, res) {
        if (!node) return

        if (node.val >= prev) {
            res.nodes += 1;
            prev = node.val
        }

        this.dfs(node.left, prev, res)
        this.dfs(node.right, prev, res)
    }
}
