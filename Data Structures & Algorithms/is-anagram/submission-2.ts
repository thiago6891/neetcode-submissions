class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const map = new Map<string, number>();
        for (const c of s) {
            if (map.has(c)) map.set(c, map.get(c) + 1);
            else map.set(c, 1);
        }
        for (const c of t) {
            if (map.has(c)) map.set(c, map.get(c) - 1);
            else return false;

            if (map.get(c) === 0) map.delete(c);
        }

        return map.size === 0;
    }
}
