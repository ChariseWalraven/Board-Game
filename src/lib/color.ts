interface ColorObj {
  [propName: number]: string 
}

export const colors: ColorObj =  {
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'yellow',
  5: 'magenta'
}

export const defaultBoard = [
  ['o', 'o', 'o'],
  ['o', 'o', 'o'],
  ['o', 'o', 'o']
]

export const randomColor = () => {
  return colors[Math.round(Math.random() * 4) + 1]
    .toString()
}

export const isValidColor = (color: string) => {
  console.log(color)
  return ['red', 'green', 'blue', 'yellow', 'magenta'].includes(color)
}
