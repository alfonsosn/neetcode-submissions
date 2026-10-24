class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {        
        const connections = new Map()
        const visited = new Set()

        this.contructConnections(n, edges, connections)
        
        function dfs(node) {
            if (visited.has(node)) return

            visited.add(node)

            for (let edge of connections.get(node)) {
                dfs(edge, node)
            }
        }
        
        let components = 0;

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                dfs(i);
                components++;
            }
        }

        return components
    }

    contructConnections(n, edges, connections) {
        for (var i = 0; i < n; i++) {
            connections.set(i, [])
        }

        for (let [node, edge] of edges) {
            connections.get(node).push(edge)
            connections.get(edge).push(node)
        }
    }
}
