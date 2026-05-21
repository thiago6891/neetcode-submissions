class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowSetMap = new Map<number, Set<string>>();
        const colSetMap = new Map<number, Set<string>>();
        const squareSetMap = new Map<number, Set<string>>();
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                const rowSet = rowSetMap.get(r) ?? new Set<string>();
                const colSet = colSetMap.get(c) ?? new Set<string>();
                const square = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                const squareSet = squareSetMap.get(square) ?? new Set<string>();
                const v = board[r][c];
                if (v !== '.') {
                    if (rowSet.has(v) || colSet.has(v) || squareSet.has(v)) return false;
                    rowSet.add(v);
                    rowSetMap.set(r, rowSet);
                    colSet.add(v);
                    colSetMap.set(c, colSet);
                    squareSet.add(v);
                    squareSetMap.set(square, squareSet);
                }
            }
        }

        return true;
    }
}
