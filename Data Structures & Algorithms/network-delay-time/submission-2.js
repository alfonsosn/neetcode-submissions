class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = {};

        for (let i = 1; i < n + 1; i++) {
            adj[i] = [];
        }

        for (const [s, d, w] of times) {
            adj[s].push([d, w]);
        }

        let shortest = {}
        let minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
        minHeap.enqueue([0, k])

        while (!minHeap.isEmpty()) {
            let [time, node] = minHeap.dequeue();

            if (!shortest.hasOwnProperty(node)) {
                shortest[node] = time

                for (const [neighbor, weight] of adj[node]) {
                    if (!shortest.hasOwnProperty(neighbor)) {
                        minHeap.enqueue([time + weight, neighbor])
                    }
                }
            }
        }

        return Object.keys(shortest).length === n ? Math.max(...Object.values(shortest)) : -1;
    } 
}
