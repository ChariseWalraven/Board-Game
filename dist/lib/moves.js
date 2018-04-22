"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moves = (board1, board2) => {
    return board1
        .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
        .reduce((a, b) => a.concat(b))
        .length;
};
const defaultBoard = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o']
];
const dummyBoard = [
    ['o', 'o', 'o'],
    ['o', 'x', 'o'],
    ['o', 'x', 'o']
];
console.log(exports.moves(dummyBoard, defaultBoard));
//# sourceMappingURL=moves.js.map