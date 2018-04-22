
const colors = {
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'yellow',
  5: 'magenta'
}
const randomColor = () => {
  return colors[Math.round(Math.random() * 4) + 1]
    .toString()
}

describe('Random Colors', () => {
  test('Should return something',() => {
    expect(randomColor()).toBeDefined()
  })
  test('Should return a valid color',() => {
    const colors = ['red', 'green', 'blue', 'yellow', 'magenta']
    expect(colors).toContain(randomColor())
  })
})