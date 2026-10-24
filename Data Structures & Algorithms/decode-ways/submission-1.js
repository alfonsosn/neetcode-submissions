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

    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const memo = {}; // Memoization map
        const answers = new Set(); // To store unique decodings

        const dfs = (i, res) => {
            // Base case: if we've reached the end of the string
            if (i === s.length) {
                if (res.length > 0) {
                    answers.add(res);
                }
                return;
            }


            if (i < s.length && this.decoder[s[i]]) {
                dfs(i + 1, res + this.decoder[s[i]]);
            }

            // Double digit decoding
            if (i + 1 < s.length && this.decoder[s.substring(i, i + 2)]) {
                dfs(i + 2, res + this.decoder[s.substring(i, i + 2)]);
            }
        };

        dfs(0, "");

        // Return the number of unique decodings
        return answers.size;
    }
}
