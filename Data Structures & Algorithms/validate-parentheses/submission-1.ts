class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        for (const c of s) {
            if (c === '(' || c === '{' || c === '[') {
                stack.push(c);
            } else {
                const v = stack.pop();
                if (
                    (c === ')' && v !== '(') || 
                    (c === '}' && v !== '{') || 
                    (c === ']' && v !== '[')
                    ) return false;
            }
        }
        return stack.length === 0;
    }
}
