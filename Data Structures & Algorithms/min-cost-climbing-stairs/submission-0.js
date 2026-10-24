class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(costs) {
        
        const memo = {}

        const dfs = (i) => {
            if (i >= costs.length) {
                return 0
            }

            if (memo[i]) return memo[i]

            memo[i] = costs[i] + Math.min(dfs(i + 1), dfs(i + 2))

            return memo[i]
        }

        return Math.min(dfs(0), dfs(1))
    }
}
