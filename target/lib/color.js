"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = {
    1: 'red',
    2: 'blue',
    3: 'green',
    4: 'yellow',
    5: 'magenta'
};
exports.defaultBoard = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o']
];
exports.randomColor = () => {
    return colors[Math.round(Math.random() * 4) + 1]
        .toString();
};
//# sourceMappingURL=color.js.map