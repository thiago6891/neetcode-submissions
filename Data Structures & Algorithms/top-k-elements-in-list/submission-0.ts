class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        for (const n of nums) {
            const v = map.get(n);
            if (v === undefined) map.set(n, 1);
            else map.set(n, v + 1);
        }

        const arr = Array.from(map.entries());
        return arr.sort((a, b) => b[1] - a[1]).slice(0, k).map((v) => v[0]);
    }
}
