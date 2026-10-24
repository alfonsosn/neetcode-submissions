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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = {
            level: 0,
            lists: []
        }

        this.bfs(root, res)

        return res.lists
    }

    bfs(root, res) {
        const q = []

        if (root) q.push(root)

        while (q.length) {
            const levelSize = q.length; 
            for (let i = 0; i < levelSize; i++) {
                let curr = q.shift(); 

                if (res.lists.length -  1 < res.level) res.lists.push([])

                res.lists[res.level].push(curr.val)
                if (curr.left) q.push(curr.left);
                if (curr.right) q.push(curr.right); 
            }


            res.level = res.level + 1;
        }
    }

}
