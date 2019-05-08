## Project-Euler Helpers

### About

My ongoing collection of JS helper functions for commonly occuring tasks in the [Project-Euler](https://projecteuler.net/) problem set. 

### Setup

```
npm i --save project-euler-helpers
```

### Usage

'runtime' evals your function with given args and logs returned value and runtime to the console.
```
const { runtime } = require('project-euler-helpers')

const func = (arguments) => value

runtime(func, arguments) 
/*
func returned: value
runtime: 0.0s
*/
```
'fibonacci' module contains funcs for working with the fibonacci sequence.
```
const { genFibArr, fibNthTerm, isFib } = require('project-euler-helpers')

genFibArr(10) // [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
fibNthTerm(10) // 55
isFib(55) // true
isFib(4) // false
```

'primes' module contains functions for handling primes.

These could be more efficient; will improve as problems become more computationally demanding.
```
const { isPrime, genPrimeArr, genPrimeArrUnderMax } = require('project-euler-helpers')

isPrime(10) // false
isPrime(11) // true
genPrimeArr(5) // [2, 3, 5, 7, 11]
```
'factors' module contains functions for handling factors.
```
const { findFactors, findFactorSum, findFactorCount } = require('project-euler-helpers')

findFactors(10) // [1, 2, 5, 10] *unsorted*
findFactorSum(10) // 18
findFactorCount(10) // 4
```
'grid' module contains functions for creating grids (2d arrs).
```
const { genGrid } = require('project-euler-helpers')

genGrid(3, 4, 0) // [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]] *(rows, cols, val)*
```

'alphabet' module contains functions for generating arrays/objects of characters.
```
const { genAlphaArr, genAlphaObj } = require('project-euler-helpers')

genAlphaArr('A', 'Z') // ['A', 'B', ... ,'Z']
genAlphaObj('a', 'x') // { 'a': 1, 'b': 2, ..., 'z': 26}
```
