class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new MaxPriorityQueue()

        for (const num of nums) {
            maxHeap.enqueue(num)
        }

        console.log("before", maxHeap.toArray())

        for (var i = 1; i < k; i++) {
            maxHeap.pop()
        }

        console.log("after", maxHeap.toArray())

        return maxHeap.front()
    }
}
