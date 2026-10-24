class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
            const DIRECTIONS = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    const ROWS = heights.length;
    const COLS = heights[0].length;
    const visitedPacific = new Set();
    const visitedAtlantic = new Set();
    const res = [];

    function dfs(r, c, visited) {
        if (visited.has(`${r},${c}`)) return 

        visited.add(`${r},${c}`)

        for (let [dr, dc] of DIRECTIONS) {
            let newR = r + dr;
            let newC = c + dc;

            if (
                newR >= 0 && newC >= 0 &&
                newR < ROWS && newC < COLS &&
                heights[newR][newC] >= heights[r][c] &&
                !visited.has(`${newR},${newC}`)
            ) {
                dfs(newR, newC, visited);
            }
        }
    }

    // Perform DFS for both oceans
    for (let r = 0; r < ROWS; r++) {
        dfs(r, 0, visitedPacific); // Pacific (left column)
        dfs(r, COLS - 1, visitedAtlantic); // Atlantic (right column)
    }

    for (let c = 0; c < COLS; c++) {
        dfs(0, c, visitedPacific); // Pacific (top row)
        dfs(ROWS - 1, c, visitedAtlantic); // Atlantic (bottom row)
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (
                visitedPacific.has(`${r},${c}`) &&
                visitedAtlantic.has(`${r},${c}`)
            ) {
                res.push([r, c]);
            }
        }
    }

    return res

    }
}
