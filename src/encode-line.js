const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let count = 1;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === str[index + 1]) {
      count++;
    } else {
      newStr += count + str[index];
      count = 1;
    }
  }

  return newStr.replaceAll('1', '');
}

module.exports = {
  encodeLine
};
