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
    constructor() {
        this.height = 0; // Class property to store the maximum depth
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        this.height = 0;
        this.dfs(root, 0); 
        return this.height;
    }


    dfs(root, currHeight) {
        if (!root) return null

        currHeight += 1


        this.dfs(root.left, currHeight)
        this.dfs(root.right, currHeight)

        this.height = Math.max(currHeight, this.height)
    }
}
