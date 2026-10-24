class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(costs) {
        
        let one = 0, two = 0

        for (var i = costs.length; i >= 0; i--) {
            let temp = one
            let cost = i == costs.length ? 0 : costs[i];
            console.log(cost)
            one = cost + Math.min(one, two)
            two = temp
        }

        return Math.min(one, two)
    }
}
