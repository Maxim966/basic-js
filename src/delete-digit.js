const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let largeNumber = 0;
  let numArr = n.toString().split('').map(Number);
  for (let index = 0; index < numArr.length; index += 1) {
    const arr = [...numArr];
    arr.splice(index, 1);
    const num = Number(arr.join(''));
    if (largeNumber < num) {
      largeNumber = num;
    }
  }
  return largeNumber;
}

module.exports = {
  deleteDigit
};
