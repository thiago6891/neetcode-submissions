class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack: number[] = [];
        const result: number[] = Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                result[stack[stack.length - 1]] = i - stack[stack.length - 1];
                stack.pop();
            }
            stack.push(i);
        }
        return result;
    }
}
