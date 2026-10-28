class MinHeap {
    heap = []
    constructor() {
        this.heap = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.heap.push(val)
        this._bubbleUp(this.heap.length - 1)
    }

    _bubbleUp(index: number) {
        let parent = Math.floor((index - 1) / 2)

        while (index > 0 && this.heap[parent] > this.heap[index]) {
            const tmp = this.heap[parent];
            this.heap[parent] = this.heap[index];
            this.heap[index] = tmp;
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
    /**
     * @return {number}
     */
    pop(): number {
        if (this.heap.length === 0) return -1;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);

        return root
    }

    _bubbleDown(index: number) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }
        
        if (smallest !== index) {
            const tmp = this.heap[smallest];
            this.heap[smallest] = this.heap[index];
            this.heap[index] = tmp;

            this._bubbleDown(smallest)
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.heap.length > 0 ? this.heap[0] : -1;
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums: number[]): void {
        this.heap = [...nums]
        for (let i = Math.floor(this.heap.length / 2 + 1); i >= 0; i--) {
            this._bubbleDown(i);
        }
    }
}
