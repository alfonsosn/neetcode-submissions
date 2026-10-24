class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const connections = new Map()
        const visited = new Set()
        const queue = []

        for (var i = 0; i < n; i++) {
            connections.set(i, [])
        }

        for (let [node, edge] of edges) {
            connections.get(node).push(edge)
            connections.get(edge).push(node)
        }

        queue.push([0, null])
        let parent = null

        while (queue.length) {
            let [node, parent] = queue.shift();

            if (visited.has(node)) return false

            visited.add(node)
            
            for (let edge of connections.get(node)) {
                if (edge == parent) continue
                queue.push([edge, node])
            }
        }

        return visited.size === n
    }
}
