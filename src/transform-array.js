const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArr = [];
  const doublePrev = '--double-prev';
  const doubleNext = '--double-next';
  const discardPrev = '--discard-prev';
  const discardNext = '--discard-next';

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === doubleNext) {
      if (index < arr.length - 1) {
        newArr.push(arr[index + 1]);
      }
    } else if (element === doublePrev) {
      if (index !== 0  && arr[index - 2] !== discardNext) {
        newArr.push(arr[index - 1])
      }
    } else if (element === discardNext) {
      index++;
    } else if (element === discardPrev) {
      if (arr[index - 2] !== discardNext) {
        newArr.pop();
      }
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}

module.exports = {
  transform
};
