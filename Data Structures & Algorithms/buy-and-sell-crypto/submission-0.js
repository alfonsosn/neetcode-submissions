class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let L = 0
        let R = 1;
        let maxProfit = 0;

        while (R < prices.length) {
            if (prices[R] > prices[L]) {
                let profit = prices[R] - prices[L];
                maxProfit = Math.max(profit, maxProfit);
            } else {
                L = R;
            }   

            R++;
        }
        
        return maxProfit
    }
}
