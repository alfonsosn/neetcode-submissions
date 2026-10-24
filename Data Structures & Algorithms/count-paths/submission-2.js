class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array(m).fill(0).map(() => Array(n).fill(1));

        for (var r = 1; r < m; r++) {
            for (var c = 1; c < n; c++) {
                dp[r][c] = dp[r - 1][c] + dp[r][c - 1]
            }
        }

        return dp[m - 1][n - 1]
    }
}
