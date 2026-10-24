class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {}

        const memoization = (n) => {
            if (n == 1) return 1
            if (n == 2) return 2
            if (memo[n]) return memo[n] 

            memo[n] = memoization(n - 2) + memoization(n - 1)

            return memo[n]
        }

        return memoization(n)
    }
}
