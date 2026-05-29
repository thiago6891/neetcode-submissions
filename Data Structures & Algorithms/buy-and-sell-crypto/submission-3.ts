class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;
        let i = 0;
        let j = 1;
        while (j < prices.length) {
            const diff = prices[j] - prices[i];
            if (diff < 0) i = j;
            else max = Math.max(max, diff);
            j++;
        }
        return max;
    }
}
