class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const set = new Set(nums);
        for (const n of nums) {
            if (!set.has(n - 1)) {
                let next = n + 1;
                let length = 1;
                while (set.has(next)) {
                    length++;
                    next++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
