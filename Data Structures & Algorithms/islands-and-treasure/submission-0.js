class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[][]}
     */
    islandsAndTreasure(grid) {
        const DIRECTIONS = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const q = [];
        const visit = new Set();

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    q.push([r, c]);
                    visit.add(`${r},${c}`);
                }
            }
        }

        let distance = 1;

        while (q.length) {
            const size = q.length;

            for (let i = 0; i < size; i++) {
                const [r, c] = q.shift();

                for (const [dr, dc] of DIRECTIONS) {
                    const newR = r + dr;
                    const newC = c + dc;

                    if (
                        newR >= 0 && newR < ROWS &&
                        newC >= 0 && newC < COLS &&
                        grid[newR][newC] !== -1 &&
                        !visit.has(`${newR},${newC}`)
                    ) {
                        grid[newR][newC] = Math.min(grid[newR][newC], distance);
                        visit.add(`${newR},${newC}`);
                        q.push([newR, newC]);
                    }
                }
            }

            distance += 1; // Increment distance after processing one level
        }

        return grid;
    }
}
