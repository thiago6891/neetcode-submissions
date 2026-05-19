class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const map = new Map<string, number>();
        
        for (const c of s) {
            const v = map.get(c);
            map.set(c, v === undefined ? 1 : v + 1);
        }
        
        for (const c of t) {
            const v = map.get(c);
            if (v === undefined) return false;
            if (v === 1) map.delete(c);
            else map.set(c, v - 1);
        }

        return map.size === 0;
    }
}
