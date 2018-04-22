const moves = (board1, board2) => {
  return board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
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

describe('Moves',() => {
  test('should return something', () => {
    expect(moves(dummyBoard, defaultBoard)).toBeDefined()
  })
  test('should return 2 when given the dummy board', () => {
    expect(moves(dummyBoard, defaultBoard)).toBe(2)
  })
})
