class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        if (!wordDict.length) return false
        let res = false
        const memo = new Set(); 

        const dfs = (curr) => {
            if (curr == s) return true

            if (curr.length > s.length) return false
            if (memo.has(curr)) return false;
            memo.add(curr);

            for (let word of wordDict) {
                const newCurr = curr + word;

                if (s.substring(0, newCurr.length) !== newCurr) continue;
                
                if (newCurr === s) return true;

                if (dfs(newCurr)) return true;
            }

            return false
        }

        for (let word of wordDict) {
            res = dfs(word)
            if (res) return res
        }

        return res
    }
}
