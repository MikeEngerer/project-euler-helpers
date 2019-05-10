const isPandigital = (num, max = 9) => {
  if (num.toString().split('').includes('0')) {
    return false
  }
  let range = ''
  for (let i = 1; i <= max; i++) {
    range += i.toString()
  }
  return num.toString().split('').sort().join('') === range
}

module.exports = {
  isPandigital
}