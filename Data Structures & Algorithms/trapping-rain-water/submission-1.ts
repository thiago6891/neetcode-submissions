class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let max = 0;
        const prefix: number[] = [0]
        for (let i = 1; i < height.length; i++) {
            max = Math.max(max, height[i - 1]);
            prefix.push(max);
        }

        max = 0;
        const suffix: number[] = [0];
        for (let i = height.length - 2; i >= 0; i--) {
            max = Math.max(max, height[i + 1]);
            suffix.push(max);
        }
        suffix.reverse();

        return height.reduce(
            (prev, curr, i) => prev + Math.max(Math.min(prefix[i], suffix[i]) - curr, 0),
            0,
        );
    }
}
