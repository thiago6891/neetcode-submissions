class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let result = 0;
        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                result = Math.max(result, prices[j] - prices[i]);
            }
        }
        return result;
    }
}
