class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = []
        this.dfs(digits.split(""), 0, [], res)
        return res
    }

    dfs(digits, i, curr, res) {
        if (i > digits.length) {
            return
        }

        if (i == digits.length) {
            const combination = curr.join("")
            if (combination.length) res.push(combination)
            return
        }

        for (var k = 0; k < this.digitsMap[digits[i]].length; k++) {
            const letter = this.digitsMap[digits[i]][k]
            curr.push(letter)
            this.dfs(digits, i + 1, curr, res)
            curr.pop()
        }
    }



    digitsMap = {
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    };
}
