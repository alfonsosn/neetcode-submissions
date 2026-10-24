class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = []
        let l = 0
        let r = 0

        for (var i = 0; i < s.length; i++) {
            l = i
            r = i

            while (l >= 0 && r < s.length && s[l] == s[r]){
                res.push(s.slice(l, r + l - 1))

                l--
                r++
            }

            l = i
            r = i + 1

            while (l >= 0 && r < s.length && s[l] == s[r]){
                res.push(s.slice(l, r + l - 1))

                l--
                r++
            }

        }
        
        return res.length
    }
}
