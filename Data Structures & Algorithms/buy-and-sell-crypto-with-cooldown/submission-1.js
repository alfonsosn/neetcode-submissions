class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let dp = new Map()

        const dfs = (i, holding) => {
            if (i >= prices.length) return 0
            if (dp.has(`${i},${holding}`)) return dp.get(`${i},${holding}`)

            let cooldown = dfs(i + 1, holding) //do nothing case
        
            if (holding) {
                let sell = dfs(i + 2, 0) + prices[i]
                dp.set(`${i},${holding}`, Math.max(sell, cooldown))
            } else {
                let buy = dfs(i + 1, 1) - prices[i]
                dp.set(`${i},${holding}`, Math.max(buy, cooldown))
            }

            return dp.get(`${i},${holding}`)
        }

        return dfs(0, 0)
    }
}
