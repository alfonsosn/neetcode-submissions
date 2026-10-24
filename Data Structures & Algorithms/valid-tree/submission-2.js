class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const connections = new Map()
        const visited = new Set()

        for (var i = 0; i < n; i++) {
            connections.set(i, [])
        }

        for (let [node, edge] of edges) {
            connections.get(node).push(edge)
            connections.get(edge).push(node)
        }

        const dfs = (node, parent) => {
            if (visited.has(node)) return false

            visited.add(node)

            for (let edge of connections.get(node)) {
                if (edge === parent) {
                    continue;
                }

                console.log(node, edge)

                if (!dfs(edge, node)) return false
            }

            return true
        }

        return dfs(0, null) && visited.size === n
    }
}
