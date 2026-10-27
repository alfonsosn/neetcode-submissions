class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const answer = new Array(temperatures.length).fill(0)
        const stack: [number, number][] = []

        for (let i = temperatures.length - 1; i >= 0; i--) {
            while (stack.length && stack[stack.length - 1][0] <= temperatures[i]) {
                stack.pop()
            }
            if (stack.length) {
                answer[i] = stack[stack.length - 1][1] - i
            }
            stack.push([temperatures[i], i])

        }

        return answer
    }

}

