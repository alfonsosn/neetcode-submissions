class MinStack {
    constructor() {
        this.memory = []
        this.minResults = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.memory.push(val)

        if (!this.minResults.length) {
            this.minResults.push(val)
        } else {
            const current_min = this.minResults[this.minResults.length - 1]
            this.minResults.push(Math.min(current_min, val))
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.minResults.pop()
        return this.memory.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.memory[this.memory.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minResults[this.minResults.length - 1]
    }
}
