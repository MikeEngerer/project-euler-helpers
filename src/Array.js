Array.prototype.unique = function () {
  return this.sort((a, b) => a - b).filter((e, i) => i === this.length - 1 ? true : this[i + 1] !== e) 
}

Array.prototype.last = function () {
  return this[this.length - 1]
}

module.exports = {
  Array
}