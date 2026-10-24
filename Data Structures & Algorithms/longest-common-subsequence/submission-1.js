class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memo = new Map()

        const dfs = (i, j) => {
            if (i === text1.length || j === text2.length) {
                return 0;
            }

            if (memo.has(`${i},${j}`)) return memo.get(`${i},${j}`)

            if (text1[i] === text2[j]) {
                return 1 + dfs(i + 1, j + 1)
            }
            
            let count = Math.max(dfs(i + 1, j), dfs(i, j + 1))
            memo.set(`${i},${j}`, count)
            
            return count
        }

        return dfs(0, 0)
    }
}
