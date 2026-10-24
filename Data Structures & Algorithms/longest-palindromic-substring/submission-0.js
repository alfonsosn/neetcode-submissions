class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = 0
        let l = 0
        let r = 0
        let idx = null

        for (var i = 0; i < s.length; i++) {
            l = i
            r = i

            while (l >= 0 && r < s.length && s[l] == s[r]){
                if (r - l + 1 > res) {
                    idx = l
                    res = r - l + 1
                }

                l--
                r++
            }

            l = i
            r = i + 1

            while (l >= 0 && r < s.length && s[l] == s[r]){
                if (r - l + 1 > res) {
                    idx = l
                    res = r - l + 1
                }

                l--
                r++
            }

        }
        
        return s.slice(idx, idx + res)
    }
}
