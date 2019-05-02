const { findFactors, findFactorCount, findFactorSum } = require('./src/factors')
const { isPrime, genPrimeArr } = require('./src/primes')
const { genAlphaArr, genAlphaObj } = require('./src/alphabet')
const { isFib, fibNthTerm } = require('./src/fibonacci')
const { genGrid } = require('./src/grid')
const { runtime } = require('./src/runtime')

module.exports = {
  findFactors,
  findFactorCount,
  findFactorSum,
  isPrime,
  genPrimeArr,
  isFib,
  fibNthTerm,
  genGrid,
  runtime
}