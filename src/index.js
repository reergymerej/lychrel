/**
* @param {String/Number} val
* @return {Boolean}
*/
export function isPalindrome(val) {
  let is = true;
  const valString = val + '';
  const length = valString.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; is && i < middle; i++) {
    is = valString[i] === valString[length - 1 - i];
  }

  return is;
}

function reverseNum(num) {
  let numString = num + '';
  numString = numString.split('').reverse().join('');
  return parseInt(numString, 10);
}

/**
* @param {Number} val
* @return {Number}
*/
export function reverseAndAdd(val) {
  const reversed = reverseNum(val);
  return val + reversed;
  return 55;
}

/**
* @param {Number} val
* @param {Number} [maxIterations=100]
* @return {Object}
{
  iterations: {Number},
  isLychrel: {Boolean/undefined}, - undefined if unproven within max iterations
  lastValue: {Number},
}
*/
export function isLychrel(val, maxIterations = 100) {
  let is;
  let currentValue = val;
  const result = {
    iterations: 0,
    isLychrel: false,
    lastValue: 0,
  };

  let i = 1;

  for (; i <= maxIterations; i++) {
    if (isPalindrome(currentValue)) {
      is = false;
      break;
    }
    currentValue = reverseAndAdd(currentValue);
  }

  result.lastValue = currentValue;
  result.iterations = i - 1;
  result.isLychrel = is;

  return result;
}
