const { findFactors, findFactorCount, findFactorSum } = require('./src/factors')
const { isPrime, genPrimeArr, genPrimeArrUnderMax } = require('./src/primes')
const { genAlphaArr, genAlphaObj } = require('./src/alphabet')
const { genFibArr, isFib, fibNthTerm } = require('./src/fibonacci')
const { genGrid } = require('./src/grid')
const { runtime } = require('./src/runtime')
const { isPandigital } = require('./src/pandigital')
const { isPalindrome } = require('./src/palindromes')

module.exports = {
  findFactors,
  findFactorCount,
  findFactorSum,
  isPrime,
  genPrimeArr,
  genAlphaArr,
  genAlphaObj,
  isFib,
  genFibArr,
  fibNthTerm,
  genGrid,
  runtime,
  genPrimeArrUnderMax,
  isPandigital,
  isPalindrome
}
