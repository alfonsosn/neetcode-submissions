class Solution {
    numDecodings(s) {
        const dp = new Map();
        dp.set(s.length, 1);

        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] === "0") dp.set(i, 0)
            else {
                dp.set(i, dp.get(i + 1))

                if (i + 1 < s.length && parseInt(s.substring(i, i + 2)) < 27) {
                    dp.set(i, dp.get(i + 1) + dp.get(i + 2))
                }
            }
        }
        
        return dp.get(0)
    }
}
