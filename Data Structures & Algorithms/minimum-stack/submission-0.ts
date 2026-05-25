class MinStack {
    private readonly _stack: number[] = [];
    private readonly _mins: number[] = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this._stack.push(val);
        if (
            this._mins.length === 0 ||
            val <= this._mins[this._mins.length - 1]
            ) this._mins.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        const n = this._stack.pop();
        if (this._mins[this._mins.length - 1] === n) this._mins.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this._stack[this._stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this._mins[this._mins.length - 1];
    }
}
