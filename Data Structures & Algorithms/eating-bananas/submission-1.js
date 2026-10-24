class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles);
        let res = right;
        let sum;

        while (left <= right) {
            let k = Math.floor((left + right) / 2)
            sum = 0
            piles.forEach((p) => sum += Math.ceil(p / k) )

            if (sum <= h) {
                res = k
                right = k - 1
            } else {
                left = k + 1
            }
        }

        return res
    }
}
