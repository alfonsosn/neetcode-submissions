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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const res = { sub: false }

        this.iterateDfs(root, subRoot, res)

        return res.sub
    }

    iterateDfs(root, subRoot, res) {
        if (!root) return

        if (root.val == subRoot.val) {
            if (!res.sub) {
                res.sub = this.isSameTree(root, subRoot)
            }
        }

        this.iterateDfs(root.left, subRoot, res)
        this.iterateDfs(root.right, subRoot, res)
    }

    isSameTree(root, subRoot) {
        const res = { same: true }

        this.dfs(root, subRoot, res)

        return res.same
    }

    dfs(root, subRoot, res) {
        if (!root && !subRoot) return

        if (!root || !subRoot || root.val !== subRoot.val) {
            res.same = false
            return
        }

        this.dfs(root.left, subRoot.left, res)
        this.dfs(root.right, subRoot.right, res)
    }
}
