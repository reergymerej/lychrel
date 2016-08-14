/**
* @pararm {String/Number} val
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
* @pararm {Number} val
* @return {Number}
*/
export function reverseAndAdd(val) {
  const reversed = reverseNum(val);
  return val + reversed;
  return 55;
}
