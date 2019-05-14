const triangle = (num) => (num * (num + 1)) / 2

const pentagonal = (num) => (num * ((3 * num) - 1)) / 2

const hexagonal = (num) => num * (2 * num - 1)

const isTriangle = (num) => ((Math.sqrt((8 * num) + 1) - 1) / 2) % 1 === 0

const isPentagonal = (num) => ((Math.sqrt((24 * num) + 1) + 1) / 6) % 1 === 0

const isHexagonal = (num) => ((Math.sqrt((8 * num) + 1) + 1) / 4) % 1 === 0

module.exports = {
  triangle,
  pentagonal,
  hexagonal,
  isTriangle,
  isPentagonal,
  isHexagonal
}
