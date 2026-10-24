class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const chars = s.split("")

        let L = 0;
        let R = L;
        let uniq = new Set();
        let res = 0;

        while (R < chars.length) {
            while(uniq.has(chars[R])) {
                uniq.delete(chars[L])
                L++;
            } 
            uniq.add(chars[R])
            res = Math.max(res, R - L + 1)
            R++;
        }

        return res
    }
}
