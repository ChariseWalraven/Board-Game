// if (moves(game.board, defaultBoard) < 1)
export const moves = (board1: string[][], board2: string[][]) => {
  return board1
    .map((row, y) => row.filter((cell , x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length
}

const defaultBoard = [
  ['o', 'o', 'o'],
  ['o', 'o', 'o'],
  ['o', 'o', 'o']
]
const dummyBoard = [
  ['o', 'o', 'o'],
  ['o', 'x', 'o'],
  ['o', 'x', 'o']
]

console.log(moves(dummyBoard, defaultBoard))
