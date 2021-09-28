const rows = [
  [0,1,2,3,4],
  [5,6,7,8,9],
  [10,11,12,13,14],
  [15,16,17,18,19],
  [20,21,22,23,24],
]

const columns = Array.from(Array(5).keys()).map(num => rows.map(r => r[num]))

const diagonals = [
  [0,6,12,18,24],
  [4,8,12,16,20],
]

const allBingos = [
  ...rows,
  ...columns,
  ...diagonals,
]

export function detectBingo (numbers: number[]) {
  return allBingos.some(bingo => bingo.every(num => numbers.includes(num)))
}