class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const prereqs = new Map()
        const visited = new Set()

        for (var i = 0; i < numCourses; i++) {
            prereqs.set(i, [])
        }

        for (const [course, prereq] of prerequisites) {
            prereqs.get(course).push(prereq)
        }

        const dfs = (course) => {
            if (visited.has(course)) return false

            if (prereqs.get(course).length == 0) return true

            visited.add(course)

            for (let prereq of prereqs.get(course)) {
                if (!dfs(prereq)) return false
            }

            // why?
            visited.delete(course)

            return true
        }

        for (var i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false
        }

        return true
    }
}
