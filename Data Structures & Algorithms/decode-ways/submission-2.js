class Solution {
    decoder = {
        '1': 'A',
        '2': 'B',
        '3': 'C',
        '4': 'D',
        '5': 'E',
        '6': 'F',
        '7': 'G',
        '8': 'H',
        '9': 'I',
        '10': 'J',
        '11': 'K',
        '12': 'L',
        '13': 'M',
        '14': 'N',
        '15': 'O',
        '16': 'P',
        '17': 'Q',
        '18': 'R',
        '19': 'S',
        '20': 'T',
        '21': 'U',
        '22': 'V',
        '23': 'W',
        '24': 'X',
        '25': 'Y',
        '26': 'Z'
    };

    numDecodings(s) {
        const dp = new Map();

        const dfs = (i) => {
            if (dp.has(i)) return dp.get(i)
            if (i === s.length) return 1
            if (s[i] === "0") return 0

            let res = dfs(i + 1)

            if (i + 1 < s.length && this.decoder[s.substring(i, i + 2)]) {
                res += dfs(i + 2)
            }

            dp.set(i, res)

            return res
        }

        return dfs(0, dp)
    }
}
