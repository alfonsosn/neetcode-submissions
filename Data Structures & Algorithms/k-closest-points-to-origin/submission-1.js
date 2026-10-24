class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MinPriorityQueue(point => point[0])

        for (const [x, y] of points) {
            const distance = this.distanceFromZero([x, y]) 

            minHeap.enqueue([distance, x, y])
        }

        const res = []

        for (var i = 0; i < k; i++) {
            const coords = minHeap.pop()
            res.push([coords[1], coords[2]])
        }

        return res;
    }

    distanceFromZero(coords) {
        const x = coords[0]
        const y = coords[1]

        return x ** 2 + y ** 2;
    }
}
