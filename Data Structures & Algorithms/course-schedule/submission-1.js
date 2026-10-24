class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const connections = new Map()
        const visited = new Set()

        for (var i = 0; i < numCourses; i++) {
            connections.set(i, [])
        }

        for (const [course, prereq] of prerequisites) {
            connections.get(course).push(prereq)
        }

        const dfs = (course) => {
            if (visited.has(course)) return false

            if (connections.get(course).length === 0) return true

            visited.add(course)

            for (let prereq of connections.get(course)) {
                if (!dfs(prereq)) return false
            }

            visited.delete(course)
            connections.set(course, [])

            return true
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false
        }

        return true
    }
}
