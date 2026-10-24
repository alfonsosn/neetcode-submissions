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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = {
            level: 0,
            lists: [],
            answer: []
        }

        this.bfs(root, res)
        
        const listsLength = res.lists.length;
        console.log("listsLength", listsLength)

        for (var i = 0; i < listsLength; i++){
            let curr = res.lists[i].pop()
            res.answer.push(curr)
        }

        return res.answer
    }

    bfs(root, res) {
        const q = [];

        if (root) q.push(root)

        while(q.length) {
            const qLength = q.length;
            for (var i = 0; i < qLength; i++) {
                const curr = q.shift();

                if (res.lists.length - 1 < res.level) res.lists.push([])

                res.lists[res.level].push(curr.val)

                if (curr.left) q.push(curr.left)
                if (curr.right) q.push(curr.right)
            }

            res.level += 1 
        }
    }




}
