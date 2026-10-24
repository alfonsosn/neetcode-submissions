class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MinPriorityQueue(point => point[0])

        for (const [x, y] of points) {
            const dist = x ** 2 + y ** 2;
            minHeap.enqueue([dist, x, y])
        }

        const res = []
        for (var i = 0; i < k; i++) {
            const el = minHeap.pop()
            console.log("el", el)
            res.push([el[1], el[2]])
        }

        return res
    }
}
