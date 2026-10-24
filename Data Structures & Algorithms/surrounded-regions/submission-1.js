class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        const ROWS = board.length;
        const COLS = board[0].length;

        function unsurroundedRegion(r, c) {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] != 'O') return
            
            board[r][c] = 'T'

            for (let [dr, dc] of DIRECTIONS) {
                unsurroundedRegion(dr + r, dc + c)
            }
        }

        for (var r = 0; r < ROWS; r++){
            for (var c = 0; c < COLS; c++) {
                if (r === 0 || c === 0 || r === ROWS - 1 || c === COLS - 1) {
                    if (board[r][c] === 'O') {
                        unsurroundedRegion(r, c)
                    }
                }
            }
        }

        for (var r = 0; r < ROWS; r++){
            for (var c = 0; c < COLS; c++) {
                if (board[r][c] === 'O') board[r][c] = 'X'
            }
        }

        for (var r = 0; r < ROWS; r++){
            for (var c = 0; c < COLS; c++) {
                if (board[r][c] === 'T') board[r][c] = 'O'
            }
        }
    }
}
