class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output = {}
        const unique = new Set()

        for (let i = 0; i < strs.length; i++) {
            let sortedChars = strs[i].split("").sort().join("");
            if (unique.has(sortedChars)) {
                output[sortedChars].push(strs[i])
            } else {
                unique.add(sortedChars)
                output[sortedChars] = [strs[i]]
            }
        }
        return Object.values(output)
    }
}
