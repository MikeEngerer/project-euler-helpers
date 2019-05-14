## Project-Euler Helpers

### About

My ongoing collection of JS helper functions for commonly occuring tasks in the [Project-Euler](https://projecteuler.net/) problem set. 

### Setup

```
npm i --save project-euler-helpers
```

### Usage

Import your desired methods from 'project-euler-helpers'.

Array prototype methods:
  - Array.unique() 
  - Array.last()

All others:
  - runtime(func, args)
  - isFib(num)
  - genFibArr(length)
  - fibNthTerm(n)
  - isPrime(num)
  - genPrimeArr(length)
  - genPrimeArrUnderMax(max)
  - findFactors(num)
  - findFactorCount(num)
  - findFactorSum(num)
  - isPalindrome(num/str)
  - isPandigital(num, max)
  - genGrid(rows, cols, fill)
  - genAlphaArr(charStart, charEnd)
  - genAlphaObj(charStart, charEnd)

#### Examples:
```
const { Array } = require('project-euler-helpers')

// your arr
let arr = [1, 4, 2, 1, 2, 7]

arr.last() // 7

// this will sort your num array... do not use if index matters
arr.unique() // [1, 2, 4, 7]
```
```
const { runtime } = require('project-euler-helpers')

// your function
const func = (argument1, argument2, ...) => value

runtime(func, argument1, argument2) 
/*
* func returned: value
* runtime: 0.0s
*/
```
```
const { genFibArr, fibNthTerm, isFib } = require('project-euler-helpers')

genFibArr(10) // [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
fibNthTerm(10) // 55
isFib(55) // true
isFib(4) // false
```
```
const { isPrime, genPrimeArr, genPrimeArrUnderMax } = require('project-euler-helpers')

genPrimeArr(5) // [2, 3, 5, 7, 11]
genPrimeArrUnderMax(11) // [2, 3, 5, 7]
isPrime(11) // true
isPrime(10) // false
```
```
const { findFactors, findFactorSum, findFactorCount } = require('project-euler-helpers')

findFactors(10) // [1, 2, 5, 10] *unsorted*
findFactorSum(10) // 18
findFactorCount(10) // 4
```
```
const { isPalindrome } = require('project-euler-helpers')

isPalindrome(101) // true
isPalindrome('1010') // true
isPalindrome(1010) // false
```
```
const { genGrid } = require('project-euler-helpers')

genGrid(3, 4, 0) // [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```
```
const { isPandigital } = require('project-euler-helpers')

// second arg is range(1, max) inclusive
isPandigital(123456789) // true
isPandigital(53142, 5) // true
isPandigital(12345, 4) // false
```
```
const { genAlphaArr, genAlphaObj } = require('project-euler-helpers')

genAlphaArr('A', 'Z') // ['A', 'B', ... ,'Z']
genAlphaObj('a', 'x') // { 'a': 1, 'b': 2, ..., 'z': 26}
```
