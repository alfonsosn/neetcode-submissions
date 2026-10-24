class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const DIRECTIONS = [
            [1, 0], [-1, 0], [0, 1], [0, -1]
        ];
        const ROWS = grid.length;
        const COLS = grid[0].length;


        let fresh = 0
        let time = 0;
        const q = [];

        for (var r = 0; r < ROWS; r++) {
            for (var c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    fresh++
                }
                if (grid[r][c] === 2) {
                    q.push([r,c])
                }
            }
        }
        
        while (q.length && fresh) {
            const size = q.length; 

            for (var i = 0; i < size; i++) {
                const [r, c] = q.shift()

                for (const [dr, dc] of DIRECTIONS) {
                    const newR = r + dr;
                    const newC = c + dc;

                    if (
                        newR >= 0 && newR < ROWS &&
                        newC >= 0 && newC < COLS &&
                        grid[newR][newC] === 1
                    ) {
                        grid[newR][newC] = 2
                        q.push([newR,newC])
                        fresh--;
                    } 
                }
            }

            time++;
        }

        return fresh === 0 ? time : -1;
    }
}
