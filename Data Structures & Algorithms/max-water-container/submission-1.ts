class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let result = 0;
        let i = 0;
        let j = heights.length - 1;
        while (i < j) {
            const area = Math.min(heights[i], heights[j]) * (j - i);
            result = Math.max(result, area);
            if (heights[i] > heights[j]) j--;
            else if (heights[i] < heights[j]) i++;
            else {
                i++;
                j--;
            }
        }
        return result;
    }
}
