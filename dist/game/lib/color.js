const colors = {
    1: 'red',
    2: 'blue',
    3: 'green',
    4: 'yellow',
    5: 'magenta'
};
const defaultBoard = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o']
];
const randomColor = () => {
    return colors[Math.round(Math.random() * 4) + 1]
        .toString();
};
const arr = ['red', 'green', 'blue', 'yellow', 'magenta'];
const isValidColor = (color) => {
    return arr.includes(color);
};
console.log(isValidColor('grey'));
//# sourceMappingURL=color.js.map