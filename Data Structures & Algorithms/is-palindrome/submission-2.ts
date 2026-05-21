class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.replace(/[^A-Za-z0-9]/g, '');
        for (let i = 0, j = s.length - 1; i <= j; i++, j--)
            if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        return true;
    }
}
