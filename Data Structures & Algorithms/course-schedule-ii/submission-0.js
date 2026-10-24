class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const prereqs = new Map()
        const res = []

        for (const [course, pre] of prerequisites) {
            if (!prereqs.has(course)) {
                prereqs.set(course, []);
            }
            prereqs.get(course).push(pre);
        }

        const visited = new Set();
        const cycle = new Set();

        const dfs = (course) => {
            if (cycle.has(course)) return false
            if (visited.has(course)) return true

            cycle.add(course)

            for (let pre of prereqs.get(course) || []) {
                if (!dfs(pre)) return false
            }

            cycle.delete(course)
            visited.add(course)
            res.push(course)
            return true
        }


        for (var i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [[]]
        }

        return res
    }
}
