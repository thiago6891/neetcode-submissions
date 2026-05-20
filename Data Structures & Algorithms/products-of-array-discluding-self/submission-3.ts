class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const p = [1];
        const s = [1];
        for (let i = 1; i < nums.length; i++) {
            p.push(p[i - 1] * nums[i - 1]);
            s.push(s[i - 1] * nums[nums.length - i]);
        }
        return p.map((v, i) => v * s[s.length - 1 - i]);
    }
}
