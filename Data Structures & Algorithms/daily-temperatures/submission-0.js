class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array(temperatures.length).fill(0);
        const stack = []

        for (var i = 0; i < temperatures.length; i++){
            const temp = temperatures[i];

            while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
                const curr = stack.pop();
                res[curr[1]] = i - curr[1];
            }   

            stack.push([temp, i])
        }

        return res
    }
}
