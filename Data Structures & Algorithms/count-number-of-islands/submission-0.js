class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let islands = 0

        function dfs(r, c) {
            if (Math.min(r, c) < 0 || r >= ROWS || c >= COLS || grid[r][c] == "0") {
                return
            }

            grid[r][c] = "0"

            for (const [dr, dc] of DIRECTIONS) {
                dfs(dr + r, dc + c)
            }
        }

        for (var r = 0; r < ROWS; r++) {
            for (var c = 0; c < COLS; c++) {
                if (grid[r][c] == "1") {
                    dfs(r, c);
                    islands++
                }
            }
        }

        return islands;
    }
}
