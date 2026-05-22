class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        while (true) {
            const v = numbers[i] + numbers[j];
            if (v > target) j--;
            else if (v < target) i++;
            else return [i + 1, j + 1];
        }
    }
}
