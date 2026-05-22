class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const set = new Set<string>();
        for (let i = 0; i < nums.length; i++) {
            let j = 0;
            let k = nums.length - 1;
            while (j < k) {
                if (j === i) {
                    j++;
                    continue;
                }
                if (k === i) {
                    k--;
                    continue;
                }
                const v = nums[j] + nums[k];
                if (v < -nums[i]) {
                    j++;
                } else if (v > -nums[i]) {
                    k--;
                } else {
                    set.add(JSON.stringify([nums[i], nums[j], nums[k]].sort()));
                    j++;
                    k--;
                }
            }
        }
        return Array.from(set.values()).map((v) => JSON.parse(v));
    }
}
