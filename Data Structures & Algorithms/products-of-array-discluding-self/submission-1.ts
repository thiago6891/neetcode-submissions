class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const zeroCount = nums.filter((n) => n === 0).length;
        if (zeroCount > 1) return [...Array(nums.length)].map((_) => 0);

        if (zeroCount === 1) {
            const result = [...Array(nums.length)].map((_) => 0);
            result[nums.findIndex((n) => n === 0)] = nums
                .filter((n) => n !== 0)
                .reduce((prev, curr) => prev * curr, 1);
            return result
        }

        const product = nums.reduce((prev, curr) => prev * curr, 1);
        const result: number[] = [];
        for (const n of nums) {
            result.push(product / n);
        }
        return result;
    }
}
