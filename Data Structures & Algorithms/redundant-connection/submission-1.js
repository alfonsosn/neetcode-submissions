class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const connections = new Map();
        const res = []

        const dfs = (node, parent, visited) => {
            if (visited.has(node)) return false
            visited.add(node);

            for (let edge of connections.get(node)) {
                if (edge == parent) continue;
                if (!dfs(edge, node, visited)) return false
            }

            return true
        }


        for (let [v, e] of edges) {
            connections.has(e) ? connections.get(e).push(v) : connections.set(e, [v])
            connections.has(v) ? connections.get(v).push(e) : connections.set(v, [e])
            
            if (!dfs(v, -1, new Set())) return [v, e]
        }
    }
}
