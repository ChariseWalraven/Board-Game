"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = {
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
    return exports.colors[Math.round(Math.random() * 4) + 1]
        .toString();
};
exports.isValidColor = (color) => {
    return ['red', 'green', 'blue', 'yellow', 'magenta'].includes(color);
};
//# sourceMappingURL=color.js.map