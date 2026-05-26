class Solution {
    op(symbol: string, a: number, b: number): number {
        switch (symbol) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return Math.trunc(a / b);
            default:
                throw new Error('invalid symbol');
        }
    }

    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];
        for (const n of tokens) {
            if (n === '+' || n === '-' || n === '*' || n === '/') {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(this.op(n, a, b));
            } else {
                stack.push(Number(n));
            }
        }
        return stack.pop();
    }
}
