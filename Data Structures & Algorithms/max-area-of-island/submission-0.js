class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let max = 0

        const dfs = (r, c) => {
            if (r < 0 || c < 0
                || r >= ROWS 
                || c >= COLS 
                || grid[r][c] == 0
            ) return 0

            grid[r][c] = 0

            let length = 1

            for (const [dr, dc] of DIRECTIONS) {
                length += dfs(dr + r, dc + c)
            }

            return length
        }

        for (var r = 0; r < ROWS; r++) {
            for (var c = 0; c < COLS; c++) {
                if (grid[r][c] == 1) {
                    max = Math.max(dfs(r, c), max)
                }
            }
        }

        return max;
    }
}
