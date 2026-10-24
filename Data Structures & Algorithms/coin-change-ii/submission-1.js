class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const memo = new Map()

        const dfs = (i, target) => {
            if (target === 0) return 1; 
            if (target < 0 || i >= coins.length) return 0; 

            const key = `${i}-${target}`; 
            if (memo.has(key)) return memo.get(key); 

            let ways = dfs(i, target - coins[i]) + dfs(i + 1, target);
            memo.set(key, ways); 

            return ways
        }
        
        return dfs(0, amount)
    }
}
