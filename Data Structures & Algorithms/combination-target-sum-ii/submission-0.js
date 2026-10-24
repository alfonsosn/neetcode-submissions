class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = []
        candidates = candidates.sort()
        this.dfs(candidates, 0, [], res, target)
        return res
    }

    dfs(candidates, i, curr, res, target) {
        if (i > candidates.length || target < 0) return
        if (target == 0) {
            res.push([...curr])
            return
        }

        curr.push(candidates[i])
        this.dfs(candidates, i + 1, curr, res, target - candidates[i])
        curr.pop()
        
        while (candidates[i] == candidates[i+1] && i < candidates.length) {
            i++
        }

        this.dfs(candidates, i + 1, curr, res, target)
    }
}
