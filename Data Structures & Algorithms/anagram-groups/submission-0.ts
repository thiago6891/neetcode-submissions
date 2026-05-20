class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const toAnagramHash = (str: string): string => {
            const map = new Map<string, number>();
            for (const c of str) {
                const v = map.get(c);
                if (v === undefined) map.set(c, 1);
                else map.set(c, v + 1);
            }
            const sortedKeys = Array.from(map.keys()).sort();
            let result = '';
            for (const key of sortedKeys) {
                result += `${key}${map.get(key)}`;
            }
            return result;
        }

        let nextIdx = 0;
        const hashmap = new Map<string, number>();
        const result: string[][] = [];
        for (const str of strs) {
            const hash = toAnagramHash(str);
            if (hashmap.has(hash)) {
                result[hashmap.get(hash)].push(str)
            } else {
                hashmap.set(hash, nextIdx);
                result.push([str]);
                nextIdx++;
            }
        }

        return result;
    }
}
