/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const oldToNew = new Map();
        const queue = []

        oldToNew.set(node.val, new Node(node.val));
        queue.push(node);

        while(queue.length) {
            const curr = queue.pop()

            for (var neigh of curr.neighbors) {
                if (!oldToNew.has(neigh.val)) {
                    oldToNew.set(neigh.val, new Node(neigh.val));
                    queue.push(neigh);
                }
                oldToNew.get(curr.val).neighbors.push(oldToNew.get(neigh.val));
            }
        }


        return oldToNew.get(node.val)
    }
}
